 import profilePic from './pics/profile.jpeg'

function ProfilePicture(){

    const imageUrl = "./src/pics/profile.jpeg";

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={profilePic}></img>);   //this works
    //return(<img onClick={(e) => handleClick(e)} src={imageUrl} ></img>);  //this won't work
}
export default ProfilePicture