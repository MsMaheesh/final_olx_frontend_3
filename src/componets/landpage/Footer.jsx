import React, { useState, useContext } from 'react';
import '../../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { store } from '../../App';

function Footer() {
  const [logostatus1, setLogostatus1] = useState(false);
  const [logostatus2, setLogostatus2] = useState(false);
  const [logostatus3, setLogostatus3] = useState(false);
  const [Details,setDetails]=useContext(store)

  return (
    <div className='footercontainer'>
      <div className='footeritems'>
        <div className='footeritemlists'>
          <div className='footeritem'>
            <div className='footeritemtext'>Category</div>
            <FontAwesomeIcon
              className={`footeritemlogo ${logostatus1 ? 'footerlogoclose' : 'footerlogopen'}`}
              onClick={() => setLogostatus1(!logostatus1)}
              icon={faChevronDown}
            />
            <FontAwesomeIcon
              className={`footeritemlogo ${logostatus1 ? 'footerlogoopen' : 'footerlogoclose'}`}
              onClick={() => setLogostatus1(!logostatus1)}
              icon={faChevronUp}
            />
          </div>
          <div className={`footeritemlist ${logostatus1 ? 'footerlogoopen' : 'footerlogoclose'}`}>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,item:'Car'})}>Cars</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,item:'Phone'})}>Mobiles</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,item:'Fashion'})}>Fashion</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,item:'Tv'})}>Electronics & Applications</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,item:'Biks'})}>Bikes</div>
          </div>
        </div>

        <div className='footeritemlists'>
          <div className='footeritem'>
            <div className='footeritemtext'>Popular Locations</div>
            <FontAwesomeIcon
              className={`footeritemlogo ${logostatus2 ? 'footerlogoclose' : 'footerlogopen'}`}
              onClick={() => setLogostatus2(!logostatus2)}
              icon={faChevronDown}
            />
            <FontAwesomeIcon
              className={`footeritemlogo ${logostatus2 ? 'footerlogoopen' : 'footerlogoclose'}`}
              onClick={() => setLogostatus2(!logostatus2)}
              icon={faChevronUp}
            />
          </div>
          <div className={`footeritemlist ${logostatus2 ? 'footerlogoopen' : 'footerlogoclose'}`}>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'kurnool'})}>Kurnool</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'Hyderabad'})}>Hyderabad</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'Chenni'})}>Chenni</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'Kadapa'})}>Kadapa</div>
          </div>
        </div>

        <div className='footeritemlists'>
          <div className='footeritem'>
            <div className='footeritemtext'>Trending Locations</div>
            <FontAwesomeIcon
              className={`footeritemlogo ${logostatus3 ? 'footerlogoclose' : 'footerlogopen'}`}
              onClick={() => setLogostatus3(!logostatus3)}
              icon={faChevronDown}
            />
            <FontAwesomeIcon
              className={`footeritemlogo ${logostatus3 ? 'footerlogoopen' : 'footerlogoclose'}`}
              onClick={() => setLogostatus3(!logostatus3)}
              icon={faChevronUp}
            />
          </div>
          <div className={`footeritemlist ${logostatus3 ? 'footerlogoopen' : 'footerlogoclose'}`}>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'Nashik'})}>Nashik</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'Hyderabad'})}>Hyderabad</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'kurnool'})}>Kurnool</div>
            <div className='footeritemlisttext' onClick={()=>setDetails({...Details,place:'Kadapa'})}>Kadapa</div>
          </div>
        </div>

        <div className='footeritemicon'>
          <div className='footeritemtext'>Follow Us</div>
          <div className='footericons'>
            <FontAwesomeIcon className="footericon" icon={faFacebook} />
            <FontAwesomeIcon className="footericon" icon={faTwitter} />
            <FontAwesomeIcon className="footericon" icon={faLinkedin} />
            <FontAwesomeIcon className="footericon" icon={faYoutube} />
          </div>
        </div>
      </div>
      <div className='footerbottom'>
        <div className='footerbottomtext'>All rights reserved © 2024-2024 OLX</div>
      </div>
    </div>
  );
}

export default Footer;