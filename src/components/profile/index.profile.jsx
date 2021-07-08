import React from 'react'
import Bio from './bio'
import Skill from './skill'
import Links from './link'

class Profile extends React.Component {
  render (){
    return (
      <Bio/>
      <Skill/>
      <Link/>
    )
  }
}
export default Profile
