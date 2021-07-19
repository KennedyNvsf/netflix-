import React from 'react';
import "../banner/_banner.styles.scss";




const Banner = () => {

    const wrapDescription = (string, n) => {

        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (

       
        <header className="banner"

            style = {{backgroundSize: "cover", 
            backgroundPosition: "center center", 
            backgroundImage: `url("https://www.techtalkthai.com/wp-content/uploads/2020/03/netflix_banner_1.jpg")`}}>


            <div className="bannerContents">

                <h1 className="banner_title">Movie Name</h1>

                
                <h1 className="bannerDescription">{wrapDescription(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolore vitae repudiandae reprehenderit cum quos accusantium esse mollitia voluptatem neque. Pariatur, fugiat alias doloribus dolores blanditiis laboriosam cum ipsum consequatur necessitatibus? Maiores, suscipit unde rem voluptatum recusandae consequuntur sit earum vero cum impedit saepe commodi voluptas quo natus inventore voluptatibus.`, 100)}</h1>

                <div className="banner_buttons">

                    <button className = "banner_button"> &#9658; Play</button>
                    <button className = "banner_button"> &#9432;  More information</button>
                </div>


            </div>
            
            <div className="bannerFade_bottom"/>

         </header>

       
    )
}

export default Banner;
