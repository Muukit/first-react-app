import React from 'react'
import Bio from './bio'
import Skill from './skill'
import Links from './link'

class Profile extends React.Component {
  me = {
    name : 'Abdul Mukit Al Mehedy',
    title : 'Junior web developer',
    skillA : 'Javasctipt',
     skillB : 'python' ,
     skillC : 'java'
  }
  render (){
    return (
        <div className ='container'>
            <Bio name={this.me.name } title={this.me.title}/>
            <skill skillA ='this.me.skillA'  skillB='this.me.skillB' skillC='this.me.skillC'/>
     </div>
    )
  }
}
export default Profile
