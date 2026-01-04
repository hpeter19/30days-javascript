import profilePic from './assets/profile.png'

function Card(){
  return(
    <div className="card" >
       <img className='card-image' src={profilePic} alt="profile picture" />
       <h2>Pacific</h2>
       <p>I Study Chemistry and read Books</p>
    </div>
  );
}
export default Card