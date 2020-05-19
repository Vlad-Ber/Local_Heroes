import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props => 
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div 
        onClick={() => props.removeImage(image.public_id)} 
        className='delete'
      >
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <img 
        src={image.secure_url} 
        alt='' 
        onError={() => props.onError(image.public_id)}
      />
    </div>
  )


/*const[image, setImage] = useState('')
        const [loading, setLoading] = useState(false)

        const uploadImage = async e => {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'fessdsp')
            setLoading(true)
            const res = await fetch(
                'https://api.cloudinary.com/v1_1/group-fess/image/upload',
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setImage(file.secure_url)
            setLoading(false)
            render(){
                return(
                 <InsertImageWrapper>

                <input type="file" name="file" placeholder="Upload image" onChange={uploadImage} />
                {loading ? (
                    <h3> Loading...</h3>
                ):(
                        <img src={image} style={{width: '300px'}}/>
                )}
            </InsertImageWrapper>
                )
            }

        }
*/
