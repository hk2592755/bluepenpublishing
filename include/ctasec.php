<section class="sec13 contactFormBottom">
    <div class="container">
        <div class="row">
            <div class="col-md-6 contactFormContentLeft">
                <div class="contactContentLeft">
                    <div class="abtLeft">
                        <h4>
                            Start Your Journey to Success
                        </h4>
                        <span>Let’s Talk—Expert Advice is Just a Click Away</span>
                        <p>Our team is ready to assist you anytime. </p>
                    </div>
                </div>
                <div class="ctaWrap">
                    <div class="aboutCta">
                        <a href="tel:+13072040588" class="ctaLinePhone">
                            <i class="fa-solid fa-phone"></i>
                            <span class="smallTitleLine">We will be happy to assist you</span>
                            (307) 204-0588
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 contactFormRight">
                <div class="contactFormFields">
                    <form action="" method="post" autocomplete="off">
                        <div class="formFields">
                            <input type="text" placeholder="Name (required)" name='Name' required />
                        </div>
                        <div class="formFields">
                            <input type="text" placeholder="Email (required)" name='Email' required />
                        </div>
                        <div class="formFields">
                            <input type="text" placeholder="Phone (required)" name='Number'
                                onKeyPress={handleKeyPress}
                                onChange={handleChange} required />
                        </div>
                        <div class="formFields">
                            <textarea placeholder="Message" name='msg'></textarea>
                        </div>
                        <div class="formFields FieldButton">
                            <button type="submit" class="btnPrimary"><span>Submit <i class="fa-solid fa-arrow-right"></i></span></button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>