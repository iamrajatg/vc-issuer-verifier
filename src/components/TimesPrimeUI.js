import React from 'react'
import {useHistory} from 'react-router-dom'

function TimesPrimeUI({onSubscribe}) {
  const history=useHistory()

  const handleClick = ()=>{

    onSubscribe()
    history.push('/subscription')
  }
  return (
    <div className="c01130">
      <div className="c01132 ">
        <div className>
          <img src="https://static.timesprime.com/3x/timesprime-2.png" alt="Times Prime Logo" />
        </div>
        <div>The only membership you’ll ever need</div>
      </div>
      <div className="c01135">
        <div className="c01146 c01161">
          <button  onClick={handleClick} className="c01393 c01149 c01136  c01160 c01394 ripple" id>
            <div className="null">JOIN TIMES PRIME AT ₹1,199</div>
          </button>
        </div>
      </div>
      <div className="c01134">
      </div>
      <div id="core-offers-wrapper" className="section">
        <div id="core-offers" className="c01165 c01171 ">
          <div id="core-offer-card-1" className="c01172 c01191  c01174" style={{transform: 'scale(0.8) translateX(80px)'}}>
            <div className="c01173 ">
              <div className="c01176">
                <div className="c01177 c01192">
                </div>
                <div className="c01178 c01190">
                  <div>6 months SonyLIV Premium</div>
                  <div>Top premium streaming platform where you can watch TV shows, movies, sports, web series &amp; live TV channels
                  </div>
                  <div>Worth ₹699. You pay ₹0!</div>
                </div>
                <div className="c01179">
                  <span>
                    <img className="c01180" src="https://static.timesprime.com/2x/sonyliv-logo-box-no-margin.png" srcSet="https://static.timesprime.com/3x/sonyliv-logo-box-no-margin.png , https://static.timesprime.com/2x/sonyliv-logo-box-no-margin.png , https://static.timesprime.com/1x/sonyliv-logo-box-no-margin.png " sizes="(min-width: 1024w) , " alt="sonyliv logo" />
                  </span>
                </div>
              </div>
              <div className="c01181">
                <div className="c01182">
                  <div className="c01183">
                    <div><span>
                        <img className="c01187" src="https://static.timesprime.com/2x/sonyliv-no-margin.png" srcSet="https://static.timesprime.com/3x/sonyliv-no-margin.png , https://static.timesprime.com/2x/sonyliv-no-margin.png , https://static.timesprime.com/1x/sonyliv-no-margin.png " sizes="(min-width: 1024w) , " alt="sonyliv logo" />
                      </span>
                    </div>
                    <div>6 months SonyLIV Premium</div>
                  </div>
                  <div className="c01184">
                    <div>
                      <div className="c01193 c01185">
                      </div>
                      <div>Exclusive Originals &amp; International Series</div>
                    </div>
                    <div>
                      <div className="c01193 c01185">
                      </div>
                      <div>Live Sports &amp; TV channels</div>
                    </div>
                    <div>
                      <div className="c01193 c01185">
                      </div>
                      <div>Live Events of WWE – RAW, SmackDown</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>Download episodes &amp; watch anytime</div>
                    </div>
                  </div>
                  <div className="c01186"><span>
                      <img className="c01188" src="https://static.timesprime.com/svg/close.svg" alt="close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="core-offer-card-2" className="c01172 c01195  " style={{transform: 'scale(1)'}}>
            <div className="c01173 ">
              <div className="c01176">
                <div className="c01177 c01196" />
                <div className="c01178 c01194">
                  <div>6 months Disney+ Hotstar Super</div>
                  <div>The go-to video streaming app for the best of Indian entertainment, TV shows, LIVE cricket, news and movies</div>
                  <div>Worth ₹450. You pay ₹0!</div>
                </div>
                <div className="c01179">
                  <span>
                    <img className="c01180" src="https://static.timesprime.com/2x/hotstar-logo-box.png" srcSet="https://static.timesprime.com/3x/hotstar-logo-box.png , https://static.timesprime.com/2x/hotstar-logo-box.png , https://static.timesprime.com/1x/hotstar-logo-box.png " sizes="(min-width: 1024w) , " alt="hotstar logo" />
                  </span>
                </div>
              </div>
              <div className="c01181">
                <div className="c01182">
                  <div className="c01183">
                    <div><span>
                        <img className="c01187" src="https://static.timesprime.com/2x/hotstar.png" srcSet="https://static.timesprime.com/3x/hotstar.png , https://static.timesprime.com/2x/hotstar.png , https://static.timesprime.com/1x/hotstar.png " sizes="(min-width: 1024w) , " alt="hotstar logo" />
                      </span>
                    </div>
                    <div>6 months Disney+ Hotstar Super</div>
                  </div>
                  <div className="c01184">
                    <div>
                      <div className="c01193 c01185">
                      </div>
                      <div>Catch the live streaming of India’s favorite sports tournament, IPL!</div>
                    </div>
                    <div>
                      <div className="c01193 c01185">
                      </div>
                      <div>Exclusive access to Marvel movies, originals and more!</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>Disney+ Hotstar Super allows you to stream content on all platforms (Web, Mobile, TV)</div>
                    </div>
                  </div>
                  <div className="c01186"><span>
                      <img className="c01188" src="https://static.timesprime.com/svg/close.svg" alt="close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="core-offer-card-3" className="c01172 c01198  " style={{transform: 'scale(0.8) translateX(-80px)'}}>
            <div className="c01173 ">
              <div className="c01176">
                <div className="c01177 c01199" />
                <div className="c01178 c01197">
                  <div>100GB of Google One for 6 months</div>
                  <div>Enjoy expanded storage accross Google Drive, Gmail &amp; Google Photos</div>
                  <div>Worth ₹780. You pay ₹0</div>
                </div>
                <div className="c01179"><span><img className="c01180" src="https://static.timesprime.com/2x/google1new-logo-box.png?v=4" srcSet="https://static.timesprime.com/3x/google1new-logo-box.png?v=4 , https://static.timesprime.com/2x/google1new-logo-box.png?v=4 , https://static.timesprime.com/1x/google1new-logo-box.png?v=4 " sizes="(min-width: 1024w) , " alt="google logo" /></span></div>
              </div>
              <div className="c01181">
                <div className="c01182">
                  <div className="c01183">
                    <div><span><img className="c01187" src="https://static.timesprime.com/2x/google1new.png?v=4" srcSet="https://static.timesprime.com/3x/google1new.png?v=4 , https://static.timesprime.com/2x/google1new.png?v=4 , https://static.timesprime.com/1x/google1new.png?v=4 " sizes="(min-width: 1024w) , " alt="google logo" /></span></div>
                    <div>100GB of Google One for 6 months</div>
                  </div>
                  <div className="c01184">
                    <div>
                      <div className="c01193 c01185" />
                      <div>100GB Cloud Storage</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>Mobile Backup</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>Premium Google Support</div>
                    </div>
                  </div>
                  <div className="c01186"><span><img className="c01188" src="https://static.timesprime.com/svg/close.svg" alt="close" /></span></div>
                </div>
              </div>
            </div>
          </div>
          <div id="core-offer-card-4" className="c01172 c01201  ">
            <div className="c01173 ">
              <div className="c01176">
                <div className="c01177 c01202" />
                <div className="c01178 c01200">
                  <div>6 months UC Plus membership</div>
                  <div>Avail beauty &amp; home services at home from top-rated UC Plus professionals</div>
                  <div>Worth ₹249. You pay ₹0!</div>
                </div>
                <div className="c01179"><span><img className="c01180" src="https://static.timesprime.com/2x/uc-logo-box.png?v=6" srcSet="https://static.timesprime.com/3x/uc-logo-box.png?v=6 , https://static.timesprime.com/2x/uc-logo-box.png?v=6 , https://static.timesprime.com/1x/uc-logo-box.png?v=6 " sizes="(min-width: 1024w) , " alt="urban logo" /></span></div>
              </div>
              <div className="c01181">
                <div className="c01182">
                  <div className="c01183">
                    <div><span><img className="c01187" src="https://static.timesprime.com/2x/uc.png?v=6" srcSet="https://static.timesprime.com/3x/uc.png?v=6 , https://static.timesprime.com/2x/uc.png?v=6 , https://static.timesprime.com/1x/uc.png?v=6 " sizes="(min-width: 1024w) , " alt="urban logo" /></span></div>
                    <div>6 months UC Plus membership</div>
                  </div>
                  <div className="c01184">
                    <div>
                      <div className="c01193 c01185" />
                      <div>Enjoy discounts on every order that you place</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>Beauty &amp; home services at home from top-rated UC Plus professionals</div>
                    </div>
                  </div>
                  <div className="c01186"><span><img className="c01188" src="https://static.timesprime.com/svg/close.svg" alt="close" /></span></div>
                </div>
              </div>
            </div>
          </div>
          <div id="core-offer-card-5" className="c01172 c01204  " style={{transform: 'scale(1.2) translateY(30px)'}}>
            <div className="c01173 ">
              <div className="c01176">
                <div className="c01177 c01205" />
                <div className="c01178 c01203">
                  <div>3 months discovery+</div>
                  <div>Get unlimited access to real-life entertainment in 7 languages, exclusive premium shows and originals</div>
                  <div>Worth ₹249. You pay ₹0!</div>
                </div>
                <div className="c01179"><span><img className="c01180" src="https://static.timesprime.com/2x/discoveryplus-logo-box.png?v=27" srcSet="https://static.timesprime.com/3x/discoveryplus-logo-box.png?v=27 , https://static.timesprime.com/2x/discoveryplus-logo-box.png?v=27 , https://static.timesprime.com/1x/discoveryplus-logo-box.png?v=27 " sizes="(min-width: 1024w) , " alt="discovery logo" /></span></div>
              </div>
              <div className="c01181">
                <div className="c01182">
                  <div className="c01183">
                    <div><span><img className="c01187" src="https://static.timesprime.com/2x/discoveryplus.png?v=27" srcSet="https://static.timesprime.com/3x/discoveryplus.png?v=27 , https://static.timesprime.com/2x/discoveryplus.png?v=27 , https://static.timesprime.com/1x/discoveryplus.png?v=27 " sizes="(min-width: 1024w) , " alt="discovery logo" /></span></div>
                    <div>3 months discovery+</div>
                  </div>
                  <div className="c01184">
                    <div>
                      <div className="c01193 c01185" />
                      <div>Get 3 months Discovery Plus Subscription worth ₹249 for free</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>100% Ad-free &amp; Family Friendly</div>
                    </div>
                  </div>
                  <div className="c01186"><span><img className="c01188" src="https://static.timesprime.com/svg/close.svg" alt="close" /></span></div>
                </div>
              </div>
            </div>
          </div>
          <div id="core-offer-card-6" className="c01172 c01207  ">
            <div className="c01173 ">
              <div className="c01176">
                <div className="c01177 c01208" />
                <div className="c01178 c01206">
                  <div>20% off on Uber Premier rides</div>
                  <div>Step it up with Uber Premier and enjoy an elevated ride in a luxury car</div>
                  <div>Worth ₹1800.</div>
                </div>
                <div className="c01179"><span><img className="c01180" src="https://static.timesprime.com/2x/uber-logo-box.png?v=4" srcSet="https://static.timesprime.com/3x/uber-logo-box.png?v=4 , https://static.timesprime.com/2x/uber-logo-box.png?v=4 , https://static.timesprime.com/1x/uber-logo-box.png?v=4 " sizes="(min-width: 1024w) , " alt="uber logo" /></span></div>
              </div>
              <div className="c01181">
                <div className="c01182">
                  <div className="c01183">
                    <div><span><img className="c01187" src="https://static.timesprime.com/2x/uber.png?v=4" srcSet="https://static.timesprime.com/3x/uber.png?v=4 , https://static.timesprime.com/2x/uber.png?v=4 , https://static.timesprime.com/1x/uber.png?v=4 " sizes="(min-width: 1024w) , " alt="uber logo" /></span></div>
                    <div>20% off on Uber Premier rides</div>
                  </div>
                  <div className="c01184">
                    <div>
                      <div className="c01193 c01185" />
                      <div>20% discount upto ₹75</div>
                    </div>
                    <div>
                      <div className="c01193 c01185" />
                      <div>Each coupon is valid for 2 Premier rides every month</div>
                    </div>
                  </div>
                  <div className="c01186"><span><img className="c01188" src="https://static.timesprime.com/svg/close.svg" alt="close" /></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c01166">
          <div className="c01146 c01161">
            <button onClick={handleClick} className="  c01393 c01149 c01169  c01160 c01394 ripple" id>
              <div className="null">JOIN TIMES PRIME AT ₹1,199</div>
            </button>
          </div>
        </div>
      </div>
      <div className="c01131" />
      <div className="c01137" />
      <div className="c01138" />
    </div>
  )
}

export default TimesPrimeUI