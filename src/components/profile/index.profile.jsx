import React from 'react'
import Bio from './bio'
import Skill from './skill'
import Links from './link'

class Profile extends React.Component {
  me = {
    name : 'Abdul Mukit Al Mehedy',
    title : 'Junior web develope'
  }
  render (){
    return (
      <Bio name={this.me.name } />
      <Skills/>
      <Links/>
    )
  }
}
export default Profile
