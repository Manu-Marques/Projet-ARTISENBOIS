import './styles.scss';
import { useState, useEffect } from 'react';

 export default function Login () {
    function loadActivity() {
        fetch("https://api.unsplash.com/photos/?client_id=OmTR2D0ODw2hpL2cC9uicLrdFY-Tnds-TZ3Qg3SVpTk")
            .then((response) => response.json())
            .then((data) => {
                //setimage(data);
                 console.log(data);
            });
            }
    
    const [image, setimage] = useState([]);
    useEffect(() => {
        loadActivity();
    },  []);

    function ShowImage() {
        return (
            <div>
                <img src={image.urls.regular} alt={image.alt_description} />
            </div>
        )
    }

    return (
<div>
       <h1>{image}</h1>
       </div>
    )
}
