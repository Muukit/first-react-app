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
        <div className ='container'>
            <Bio name={this.me.name } />
       </div>
    )
  }
}
export default Profile
