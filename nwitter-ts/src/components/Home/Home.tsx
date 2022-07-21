import { dbService } from 'components/Auth/fbase'
import { useEffect, useState } from 'react'
//import Nweet from 'components/Nweet'
//import NweetFactory from 'components/NweetFactory'

import { HomeContainer } from './Home.style'

function Home({ userObj }: { userObj: any }) {
  const [nweets, setNweets] = useState([])

  // useEffect(() => {
  //   dbService
  //     .collection('nweets')
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot(snapshot => {
  //       const newArray:{ id: string; }[]= snapshot.docs.map(document => ({
  //         id: document.id,
  //         ...document.data(),
  //       }))
  //       setNweets(newArray:{ id: string; }[])
  //     })
  // }, [])
  return (
    <HomeContainer>
      {/* <NweetFactory userObj={userObj}/> */}
      <div style={{ margin: 30 }}>
        {/* {nweets.map(nweet => {
          return (
            // <Nweet
            //   key={nweet.id}
            //   nweetObj={nweet}
            //   isOwner={nweet.creatorId === userObj.uid}
            // />
          )
        })} */}
      </div>
    </HomeContainer>
  )
}

export default Home
