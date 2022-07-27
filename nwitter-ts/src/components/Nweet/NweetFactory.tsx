import { useState } from 'react'
import { dbService, storageService } from 'components/Auth/fbase'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  FactoryForm,
  FactoryInputContainer,
  FactoryInput,
  FactoryInputArrow,
  FactoryInputLabel,
  FactoryInputLabelSpan,
  FactoryFormAttachment,
  FactoryFormAttachmentImg,
  FactoryFormClear,
} from './NweetFactory.style'

const NweetFactory = ({ userObj }: any) => {
  const [nweet, setNweet] = useState('')
  const [attachment, setAttachment] = useState('')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    if (nweet === '') {
      return
    }
    let attachmentUrl = ''
    if (attachment !== '') {
      const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`)
      const response = await attachmentRef.putString(attachment, 'data_url')
      attachmentUrl = await response.ref.getDownloadURL()
    }
    await dbService.collection('nweets').add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    })
    setNweet('')
    setAttachment('')
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault()
    const {
      target: { value },
    } = event
    setNweet(value)
  }

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { files },
    } = event
    if (files) {
      const theFile = files[0]
      const reader = new FileReader()
      reader.onloadend = (finishedEvent: ProgressEvent<FileReader>) => {
        // const {
        //   currentTarget: { result },
        // } = finishedEvent
        // ?????
        const { result } = finishedEvent.currentTarget as any
        setAttachment(result)
      }
      if (Boolean(theFile)) {
        reader.readAsDataURL(theFile)
      }
    }
  }

  const onClearAttachment = () => setAttachment('')

  return (
    <FactoryForm onSubmit={onSubmit}>
      <FactoryInputContainer>
        <FactoryInput
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <FactoryInputArrow type="submit" value="&rarr;" />
      </FactoryInputContainer>
      <FactoryInputLabel htmlFor="attach-file">
        <FactoryInputLabelSpan>Add photos</FactoryInputLabelSpan>
        <FontAwesomeIcon icon={faPlus} />
      </FactoryInputLabel>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ opacity: 0 }}
      />
      {attachment && (
        <FactoryFormAttachment>
          <FactoryFormAttachmentImg
            alt=""
            src={attachment}
            style={{ backgroundImage: attachment }}
          />
          <FactoryFormClear onClick={onClearAttachment}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </FactoryFormClear>
        </FactoryFormAttachment>
      )}
    </FactoryForm>
  )
}

export default NweetFactory
