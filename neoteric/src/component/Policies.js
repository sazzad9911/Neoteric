import React from 'react'
import './Policies.css'
import {IoIosArrowDown} from 'react-icons/io'

const Policies=()=>{
    var i=0;
    const setClass=(p)=>{
        var element = document.getElementById(p);
        element.classList.toggle("p22");
    }
    return(
        <div className='policies'>
            <div className='p1'>
                <h5>Our Policies:</h5>
                <div className='p2' id='privacy'>
                <div className='p3' onClick={setClass.bind(this,'privacy')}>
                    <p>Privacy Policy</p>
                    <IoIosArrowDown style={{marginLeft:'13px'}}></IoIosArrowDown>
                </div>
                <h4><b>NeotericBD Discloses The Following Privacy Practices</b><br></br>
                NeotericBD respects and protects the privacy of our customers and users who visit our websites. This privacy policy explains how we collect and use information for services. By using any services provided by NeotericBD you indicate that you agree to the collection and use of your information by NeotericBD as outlined in this privacy policy. Furthermore, please note that in the event that you provide information to us and then choose not to use our services, the information you provide to us will still be handled as set forth in this privacy policy.<br></br>
                <b>1. Why We Collect Information</b><br></br>
                First and foremost, NeotericBD collects information to improve the services we provide and to present you with information and services that may interest you. We also use your information to measure our success and performance. For example, aggregate information gives us an idea of the number of visitors we attract and how they navigate our websites.<br></br>
                <b>2. Personal Information Collection And Communication</b><br></br>
                As stated above, unless you voluntarily provide personal information for a specific purpose, we do not collect personal information from you. We will never combine any personal information about a user of our services with any aggregate information we collect about that user, whether collected on our site or our services.<br></br>
                <b>3. Personal Information You Provide</b><br></br>
                NeotericBD will not sell, share, or rent this information to others in ways different from what is disclosed in this statement. However, we may transfer personal information in connection with a sale or merger of NeotericBD or the division responsible for the services provided to you. We may also share your personal information, such as your email address, mailing address, etc., with our technical consultants, third party auditors, and other third parties who make our services available, enhance its functionality, or provide associated services, and/or who deal with you in processing your orders and/or delivering content, services and gifts. These third parties are not allowed to use personal information except for the purposes of providing the applicable services. In addition, we reserve the right to disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served via our website or company.<br></br>
                <b>4. Use And Protection Of Personal Information</b><br></br>
                We may collect non-personally identifiable information with cookies, such as ip address, browser type and version, and pages you view. We also keep track of how you got to our site and any links you click on to leave our site. This aggregate information is analyzed and combined with similar aggregate information of other users and may be collected on our site. We may share aggregate information with our business partners and other third parties. Such aggregate information is anonymous and does not identify any individual user, and we do not link this automatically collected data to personally identifiable information. You can remove persistent cookies by following directions on your internet browser file. If you reject cookies, you may still use our site, but your ability to use some areas of our site may be limited. We use your website activity to assist us in offering you a personalized web experience, assist you with technical support, diagnose problems with our server, administer our websites, and to tailor our service offerings to you. This privacy statement covers the use of cookies by this site only and does not cover the use of cookies by any advertisers.<br></br>
                <b>5. Data Retention</b><br></br>
                All personally identifiable information that we collect from you is retained for a period of time after our relationship with you ends. This is true whether you only explored obtaining services from us and either rejected or did not accept an offer to provide services, whether you obtained services from us and later terminated those services, or whether you obtained services from us and the term of those services was fulfilled. In each case, we will retain all personally identifiable information for a period of two (2) years following the end of our relationship with you, or from the date that you rejected an offer of services, or from the date that an offer of services lapsed (whichever is later).<br></br>
                <b>6. Third Party Website Links</b><br></br>
                Some of our websites provide links to third-party websites, such as those of our clients, affiliates, business partners, and donors. We have no access to or control over their practices. Because NeotericBD does not control the information policies or practices of these third parties websites, you should review their respective privacy policies to learn more about how they collect and use personal information.<br></br>
                <b>7. Security Information</b><br></br>
                NeotericBD stores all data using industry-standard security devices, such as firewalls and encryption protocols, to prevent unauthorized access to our data. We have put in place reasonable physical, electronic, and managerial procedures, coupled with carefully developed security procedures to protect your information from loss, misuse, or unauthorized alteration. We have put in place policies to restrict access to your information by our employees. our employees are trained to safeguard your information. Additionally, we use internal and external resources to review the adequacy of our security procedures.<br></br>
                <b>8. Changes To This Privacy Policy</b><br></br>
                Our privacy policy may change from time to time. If we decide to change our privacy policy, we will post these changes to this privacy statement on www.neoteric-bd.com and other places we deem appropriate, so you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. We reserve the right to modify this privacy statement at any time, so please review it frequently. your continued use of the site after such changes have been posted indicates your consent and acceptance of such changes.
                </h4>
                </div>
                <div className='p2' id='shoping'>
                <div className='p3' onClick={setClass.bind(this,'shoping')}>
                    <p>Shipping Policy</p>
                    <IoIosArrowDown></IoIosArrowDown>
                </div>
                <h4>
                <b>NeotericBD Shipping Charges are as follows: </b><br></br>
                    •	Inside Dhaka: BDT 70 with Cash on Delivery<br></br>
                    •	Outside Dhaka: BDT 150 with Full Advance Payment<br></br>
                    Delivery is generally done in 2-3 business days. But it may take upto 7 days considering the emergency. If it is taking more time than this, do not hesitate to ask us about your order state. NeotericBD reserves the right to make any changes to the above mentioned prices without any prior notice. 
                </h4>
                </div>
                <div className='p2' id='refound'>
                <div className='p3' onClick={setClass.bind(this,'refound')}>
                    <p>Refound Policy</p>
                    <IoIosArrowDown style={{marginLeft:'4px'}}></IoIosArrowDown>
                </div>
                <h4>
                    <b>Refund, Exchange and Return Policy:</b><br></br>
                    •	If you are not 100% satisfied with your purchase, you can return the product and get a full refund or exchange the product for another one.<br></br>
•	To request return/exchange of an item, please inform us within 72 hours from the date you received it. Exchanges are subject to product availability.<br></br>
•	Any product you return/exchange must be in the same condition you received it and in the original packaging. Please keep the receipt.<br></br>
•	NeotericBD will accept the return or exchange of items which are in new conditions, unworn, unaltered and free of damages by the customer.<br></br>
•	Items will NOT be exchanged or returned if a request is made after 72 hours.<br></br>
•	If you’ve received a damaged or defective item, please contact us and we will provide support right away.<br></br>
•	For returns and exchanges, no refunds or adjustments will be made for any original shipping and/or handling charges.<br></br>

                </h4>
                </div>
            </div>
        </div>
    )
}
export default Policies; 