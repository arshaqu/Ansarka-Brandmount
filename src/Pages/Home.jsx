import React, { useEffect } from 'react';
import './Home.css';
import image1 from '../Assets/Group 1.png';
import image2 from '../Assets/Layer 4.png'
import image3 from '../Assets/Layer 7.png'
import { LiaAwardSolid } from "react-icons/lia";
import { TbTargetArrow } from "react-icons/tb";
import { GiFallingEye } from "react-icons/gi";
import { SiApachetomcat } from "react-icons/si";
import { BiSolidQuoteLeft } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({
          duration: 2500, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function
          once: false, // Whether animation should happen only once - while scrolling down
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);



  return (
    <div>
   <div className='first_section' style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div style={{ margin: '80px 230px 0px' }}>
        <h1
          style={{ fontSize: '80px', width: '100%', fontWeight: 'bold' }}
          className="exo section1_h1"
        >
          Unleash<br /> Your True <br />Potential
        </h1>
        <button
          style={{ width: '300px', height: '50px', position: 'absolute' ,zIndex:10}}
          type="button"
          className="btn buttons btn-outline-dark exo mt-5 ml-5"
        >
          CONTACT ME!
        </button>
        <img className=" image" src={image1} alt="neoneow" />
      </div>
    </div>








    <div className='second_section' style={{ width: '100%', height: 'auto', backgroundColor: '#242f65', display: 'flex' }} className='mt-5 my-5'>
      <div className='second' style={{marginBottom:'82px',marginLeft:'50px'}} >
        <img className="imageSec2 mx-3 my-5 " src={image2} alt="neoneow" style={{width: 'auto',height: 'auto', display: 'block',margin: '0 ',marginLeft:'50px',overflow:'hidden'}}
          data-aos="fade-up" 
        />
        <div
          className='seconde_div2'
          style={{ position: 'absolute', marginTop: '-253px', color: 'white' }}
          data-aos="fade-up" 
        >
          <h1
            style={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: '80px' }}
            className="exo mx-5 second_h1_tag"
          >
            Get to <br /> Know me
          </h1>
          <button
            type="button"
            className="btn btn-light"
            style={{ marginLeft: '50px', width: '280px', borderRadius: '15px' }}
         
          >
            LEARN MORE
          </button>
        </div>
      </div>
        <div className='second_div' style={{color:'white',display:'flex ',alignItems:'center',fontSize:'30px' ,marginBottom:'50px'}}>
            <p
            data-aos="fade-up"  className=' m-5 cormorant'>Discover the power within you and unlock endless possibilities. Embrace your true potential with confidence and determination. Every step you take towards self-improvement is a step closer to achieving your dreams. Remember, the journey is just as important as the destination, and with the right mindset, nothing is beyond your reach.</p>
        </div>
    </div>






    <div className='section_third' style={{ width: '100%', height: '100vh', display: 'flex' }}>
      <div
        className='third_sub idontknow'
        data-aos="fade-up"
        style={{
          border: 'solid 1px lightgray',
          width: '400px ',
          height: '480px ',
          margin: '40px 94px 4px ',
          borderRadius: '35px 35px 1px 1px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div
          data-aos="fade-right"
          className='thisone'
          style={{
            width: '350px',
            backgroundColor: '#242f65',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            margin: '25px 24px 2px',
            borderRadius: '15px',
          }}
        >
          <div
          className='background_blue'
            style={{
              borderRadius: '50%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LiaAwardSolid
            className='icone'
              style={{ width: '70px', height: '70px', color: '#3DC2EC' }}
            />
          </div>
          <p
            className="mt-2 mx-3 achievements"
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '25px',
            }}
          >
            ACHIEVEMENTS
          </p>
        </div>
        <div  className="sample">
          <div className="">
            <h1 className="fonthead">Lorem ipsum dolor</h1>
            <p className="fontpara">
              Lorem ipsum dolorsitamet,consectetur adipiscingelit,seddoeiusmodtempor
              incididuntutlabore.
            </p>
          </div>
          <div>
            <h1 className="fonthead">Lorem ipsum dolor</h1>
            <p className="fontpara">
              Lorem ipsum dolorsitamet,consectetur adipiscingelit,seddoeiusmodtempor
              incididuntutlabore.
            </p>
          </div>
          <div>
            <h1 className="fonthead">Lorem ipsum dolor</h1>
            <p className="fontpara">
              Lorem ipsum dolorsitamet,consectetur adipiscingelit,seddoeiusmodtempor
              incididuntutlabore.
            </p>
          </div>
        </div>
      </div>
      <div
      className='why_imag'
        data-aos="fadeInUp"
        style={{
          color: '#242f65',
          margin: '1px 1px 10px -100px',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        <div className=" allinall exo">
        <p style={{marginLeft:'120px'}} className='whychoose'>WHY CHOOSE ME</p>
        <p style={{ fontWeight: 'bold',marginLeft:'150px' }} className="exo whychoose ">
          Lorem
          <br /> ipsum dolor
        </p>
        </div>
        <div>
        <img className="third_imagi mt-5" src={image3} alt="new pics" />
        </div>
      </div>
   </div> 




 
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }}>
      <div 
      className='cat_box'
        style={{ 
          width: '88%', 
          height: '600px', 
          backgroundColor: '#242f65', 
          borderRadius: '30px',
          display: 'flex',
          justifyContent: 'space-around', 
          alignItems: 'center',
        }}
        data-aos="fade-up" // Animation for the entire container
      >
        <div 
        className='iconing'
          style={{ 
            width: '30%', 
            height: '80%',
            backgroundColor: 'white',
            borderRadius: '15px' ,
            marginLeft:'35px',
            marginTop:'55px',
          }}
          data-aos="zoom-in" // Animation for the first box
        >
          <TbTargetArrow className='m-3' style={{width:'70px',height:'70px' ,color:'#242f65'}} />
        </div>
        <div 
        className='iconing'
          style={{ 
            width: '30%', 
            height: '80%', 
            backgroundColor: 'white',
            borderRadius: '15px' ,      
            marginTop:'55px',
          }}
          data-aos="zoom-in" // Animation for the second box
          data-aos-delay="200" // Delay the animation by 200ms
        >
          <GiFallingEye className='m-3' style={{width:'70px',height:'70px' ,color:'#242f65'}} />
        </div>
        <div 
        className='iconing12'
          style={{ 
            width: '30%', 
            height: '80%', 
            backgroundColor: 'white',
            borderRadius: '15px' ,
            marginRight:'35px',
            marginTop:'55px',
          }}
          data-aos="zoom-in" // Animation for the third box
          data-aos-delay="400" // Delay the animation by 400ms
        >
          <SiApachetomcat className='m-3' style={{width:'70px',height:'70px' ,color:'#242f65'}}/>
        </div>
      </div>
    </div> 

    <div
    className='testimoni'
    style={{
      width: '100%',
      height: 'auto',
      background: 'linear-gradient(180deg, #263f65, #357a77 50%, #263f65)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '20px',
    }}>
      <div>
        <h1
          className='testimonials'
          data-aos="fadeInText" data-aos-delay="100" style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '140px',
          fontWeight: 'bold',
          marginBottom: '50px',
          marginTop:'40px',
          marginLeft:'50px'
        }}>
          Testimonials
        </h1>
      </div>

      <div
      className='boxers'
      style={{
        display: 'flex',
        width: '80%',
      }}>
        <div data-aos="fade-up"
          className='boxe'
        style={{
          marginTop: '0px',
          width: '22%',
          height: '548px',
          backgroundColor: 'white',
          borderRadius: '15px 15px 0px 0px',
          boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        }}>
          <BiSolidQuoteLeft style={{width:'100px',height:'40px',marginTop:'40px',color:'#263f65'}} />
          <p style={{color:'#48bc8c'}} className='m-5'>
            Lorem ipsum dolorsit samet, consectetur adipiscingelit, seddoeius modtemporincididuntut laboreetdoloremagna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. this will be a massive entry.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" 
          className='boxe boxe2'
        style={{
          marginTop: '50px',
          width: '22%',
          height: '498px',
          backgroundColor: '#48bc8c',
          borderRadius: '15px 15px 0px 0px',
          boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        }}>
          <BiSolidQuoteLeft style={{width:'100px',height:'40px',marginTop:'40px',color:'#263f65'}}/>
          <p style={{color:'white'}} className='m-5'>
            Lorem ipsum dolorsit samet, consectetur adipiscingelit, seddoeius modtemporincididuntut laboreetdoloremagna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. this will be a massive entry.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200"
        className='boxe  box3'
        style={{
          width: '22%',
          height: '458px',
          marginTop: '90px',
          backgroundColor: 'white',
          borderRadius: '15px 15px 0px 0px',
          boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        }}>
          <BiSolidQuoteLeft style={{width:'100px',height:'40px',marginTop:'40px',color:'#263f65'}}/>
          <p style={{color:'#48bc8c'}} className='m-5'>
            Lorem ipsum dolorsit samet, consectetur adipiscingelit, seddoeius modtemporincididuntut laboreetdoloremagna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300"
         className='boxe'
        style={{
          width: '22%',
          marginTop: '10px',
          height: '538px',
          backgroundColor: '#48bc8c',
          borderRadius: '15px 15px 0px 0px',
          boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        }}>
          <BiSolidQuoteLeft style={{width:'100px',height:'40px',marginTop:'40px',color:'#263f65'}}/>
          <p style={{color:'white'}} className='m-5'>
            Lorem ipsum dolorsit samet, consectetur adipiscingelit, seddoeius modtemporincididuntut laboreetdoloremagna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. this will be a massive entry.
          </p>
        </div>
      </div>
    </div>



    <div className='mb-5 footer_main' style={{width:'100%',height:'30vh',display:'flex',justifyContent:'space-around',color:'#242f65',fontFamily:'sans-serif'}}>
      <div  className='m-5'>
        <h3 className='foot_head'>Lorem Ipsum</h3>
        <p className='foot_para' style={{width:'250px'}}>Loremipsumdolorsitamet,
          consecteturadipiscingelit,
          seddoeiusmod and temporincidi
          duntutlaboreetdolore
          magnaaliqua.Quisipsumsuspendisse</p>
      </div>

      <div className='m-5'>
        <h3 className='foot_head'>Lorem Ipsum</h3>
        <p className='foot_para'>About Us</p>
        <p className='foot_para'>Careers</p>
        <p className='foot_para'>News</p>
        <p className='foot_para'>Contact</p>

      </div>

      <div className='m-5'>
        <h3 className='foot_head'>Services</h3>
        <p className='foot_para'>About Us</p>
        <p className='foot_para'>Careers</p>
        <p className='foot_para'>News</p>
        <p className='foot_para'>Contact</p>
      </div>

      <div className='m-5'>
        <h3 className='foot_head'>News Letter</h3>
        <p className='foot_para'>Sign up our news letter to get update<br/>
           information , newsand free insight.</p>
      </div>

    </div>
 




    </div>

  );
}

export default Home;
