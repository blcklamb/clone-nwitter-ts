import { dbService, storageService } from 'components/Auth/fbase'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import {
  NweetContainer,
  NweetEditForm,
  NweetFormInput,
  NweetFormBtn,
  NweetEditCancelBtn,
  NweetAction,
} from './Nweet.style'

function Nweet({ nweetObj, isOwner }) {
  const [editing, setEditing] = useState(false)
  const [newNweet, setNewNweet] = useState(nweetObj.text)
  const onDeleteClick = async () => {
    const ok = window.confirm('Do you want to delete this nweet?')

    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete()
      if (nweetObj.attachmentUrl != '') {
        await storageService.refFromURL(nweetObj.attachmentUrl).delete()
      }
    }
  }

  const toggleEditing = () => setEditing(prev => !prev)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { value },
    } = event
    setNewNweet(value)
  }

  const onSubmit = async event => {
    event.preventDefault()
    await dbService.doc(`nweets/${nweetObj.id}`).update({ text: newNweet })
    setEditing(false)
  }
  return (
    <NweetContainer>
      {editing ? (
        <>
          <NweetEditForm onSubmit={onSubmit}>
            <NweetFormInput
              onChange={onChange}
              value={newNweet}
              required
              placeholder="Edit you nweet"
              autoFocus
            />
            <NweetFormBtn type="submit" value="Update Nweet" />
          </NweetEditForm>
          <NweetEditCancelBtn onClick={toggleEditing}>Cancel</NweetEditCancelBtn>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img alt="" src={nweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <NweetAction>
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </NweetAction>
          )}
        </>
      )}
    </NweetContainer>
  )
}

export default Nweet
