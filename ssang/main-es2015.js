(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"main-con main-banner innr-bannr\">\n\n       <div class=\"container\">\n\n         <div class=\"banner-inner\">\n\n           <div class=\"banner-cap\">\n\n           </div>\n\n         </div>\n\n       </div>\n\n     </div>\n<div class=\"abut-sec\">\n\n  <div class=\"container\">\n\n    <div class=\"abt-innr\">\n\n      <div class=\"row align-items-center\">\n\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n\n          <img src=\"assets/img/abt-school.png\" alt=\"about school shoppe\" class=\"img-fluid\">\n\n        </div>\n\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n\n          <div class=\"abt-schoolshoppe\"> \n\n            <h2>Welcome </h2>\n\n            <p>Welcome to the Educational Shopping Destination! Digitalization has changed the world all around; however, educational technology is still lagging behind. SchoolShoppe is the ultimate destination to offer needful resources to schools, students, and parents. We believe in transforming an overall educational shopping experience by providing a pin to ship necessities to the educational ecosystem. When most of the Schools face challenges to deal with various vendors, School Shoppe bridges the gap between shoppers and the distributors. </p>\n\n            <p>Be it Uniforms, School books, Stationery, Accessories, Musical instruments, Sports goods, Educational tours, Advertising, Placement, Franchisee or Consultancy Services; we understand your needs. SchoolShoppe has been conceptualized to solve every problem instead of depending on different people for everyday myriad school needs.</p>\n\n            <p>With the use of technology, our dedicated team is focused on transforming the face of Education in India. We leverage requirements to schools so you can focus on core learning principles. Get started with kindling the spark of excellence!</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/banner/banner.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/banner/banner.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-con main-banner\">\n\n       <div class=\"container\">\n\n         <div class=\"banner-inner\">\n\n           <div class=\"banner-cap\">\n\n             <img class=\"img-fluid\" src=\"assets/img/one.png\" class=\"banner school shoppe\">\n\n             <h1>stop solution for all <br>your educational needs</h1>\n\n           </div>\n\n         </div>\n\n       </div>\n\n     </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/career/career.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/career/career.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"main-con main-banner innr-bannr\">\n       <div class=\"container\">\n         <div class=\"banner-inner\">\n           <div class=\"banner-cap\">\n           </div>\n         </div>\n       </div>\n     </div>\n    <!-- banner ends -->\n    \n<div class=\"abut-sec\">\n  <div class=\"container\">\n      <h2>Career</h2>\n\t  <p>SchoolShoppe is the best Educational marketplace, and we will provide you with an array of opportunities with a dynamic working environment. We sneak out for passionate and energetic enthusiasts who can join us and utilize their talents for a resourceful educational ecosystem. Get in touch with us here!</p>\n    <div class=\"career_page\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <div class=\"career-img\">\n            <img src=\"assets/img/career.png\" class=\"img-fluid\">\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <div class=\"career_frm\">\n              <form  [formGroup]=\"careerForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group crer\">\n                <input type=\"text\" class=\"form-control\"  id=\"txtname\" placeholder=\"Name\" name=\"txtname\" formControlName=\"uname\">\n                <span *ngIf=\"careerForm.hasError\">\n                  {{ unameErrors()}}\n                </span>\n              </div>\n              <div class=\"form-group crer\">\n                <input type=\"text\" class=\"form-control\" id=\"txtemail\" placeholder=\"Email address\" name=\"txtemail\">\n              </div>\n              <div class=\"form-group crer\">\n                <input type=\"text\" class=\"form-control\" id=\"txtphn\" placeholder=\"Mobile No.\" name=\"txtphn\">\n              </div>\n              <div class=\"form-group crer\">\n                <div class=\"control-group mem_phto\">\n                     <!-- image-preview-filename input [CUT FROM HERE]-->\n                  <div class=\"input-group image-preview\">\n                      <input type=\"text\" class=\"form-control image-preview-filename\" placeholder=\"Upload Resume\" disabled=\"disabled\" > <!-- don't give a name === doesn't send on POST/GET -->\n                      <span class=\"input-group-btn\">\n                          <!-- image-preview-clear button -->\n                          <button type=\"button\" class=\"btn btn-default image-preview-clear\" style=\"display:none;\">\n                              <span></span><i class=\"fas fa-times\"></i> Clear\n                          </button>\n                          <!-- image-preview-input -->\n                          <div class=\"btn btn-default image-preview-input\">\n                              <span><i class=\"fas fa-folder-open\"></i></span>\n                              <span class=\"image-preview-input-title\">Browse</span>\n                              <input type=\"file\" accept=\"application/*\" name=\"input-file-preview\" id=\"input-file-preview\" /> <!-- rename it -->\n                          </div>\n                      </span>\n                  </div><!-- /input-group image-preview [TO HERE]--> \n                  </div>\n              </div>\n              <div class=\"form-group crer\">\n                 <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"careerForm.invalid\">Submit</button>\n              </div>\n              <input type=\"hidden\" name=\"caseno\" value=\"MQ==\"> \n            </form>\n          </div> \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/center/center.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/center/center.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<div class=\"main-con box-con\">\n\n      <div class=\"container\">\n\n        <div class=\"serv-inner-main\">\n\n           <h2>Service We Offer</h2>\n\n           <!-- <p>Welcome to the Educational Shopping Destination! Digitalization has changed the world all around; however, educational technology is still lagging behind.</p> -->\n\n           <div class=\"owl-carousel owl-theme serv-crousel\">\n\n             <div class=\"item\">\n\n               <div class=\"row no-gutters\">\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n\n                    <div class=\"serv-inner\">\n\n                      <img class=\"img-fluid\" src=\"assets/img/serv-one.jpg\" alt=\"Educational Technology\">\n\n                      <p class=\"title\"><a href=\"educational-technology.php\">Educational Technology</a></p>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n\n                    <div class=\"serv-inner\">\n\n                       <img class=\"img-fluid\" src=\"assets/img/serv-two.jpg\" alt=\"School Management Software\">\n\n                       <p class=\"title\"><a href=\"software-management.php\">School Management Software</a></p>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n\n                    <div class=\"serv-inner\">\n\n                       <img class=\"img-fluid\" src=\"assets/img/serv-three.jpg\" alt=\"Books\">\n\n                       <p class=\"title\"><a href=\"books.php\">Books</a></p>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n\n                    <div class=\"serv-inner\">\n\n                        <img class=\"img-fluid\" src=\"assets/img/serv-four.jpg\" alt=\"Uniform and Accessories\">\n\n                        <p class=\"title\"><a href=\"uniform.php\">Uniform and Accessories</a></p>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n\n                    <div class=\"serv-inner\">\n\n                        <img class=\"img-fluid\" src=\"assets/img/serv-five.jpg\" alt=\"Furniture /Accessories\">\n\n                        <p class=\"title\"><a href=\"furniture.php\">Furniture /Accessories</a></p>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n\n                    <div class=\"serv-inner\">\n\n                        <img class=\"img-fluid\" src=\"assets/img/serv-six.jpg\" alt=\"Labs\">\n\n                        <p class=\"title\"><a href=\"labs.php\">Labs</a></p>\n\n                    </div>\n\n                  </div>\n\n               </div>               \n\n             </div>\n\n             <div class=\"item\">\n\n               <div class=\"row no-gutters\">\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n                    <div class=\"serv-inner\">\n                      <img class=\"img-fluid\" src=\"assets/img/serv-seven.jpg\" alt=\"Sports Solutions\">\n                      <p class=\"title\"><a href=\"sports-solutions.php\">Sports Solutions</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n                    <div class=\"serv-inner\">\n                       <img class=\"img-fluid\" src=\"assets/img/serv-eight.jpg\" alt=\"Musical Instruments\">\n                       <p class=\"title\"><a href=\"musical-instruments.php\">Musical Instruments</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n                    <div class=\"serv-inner\">\n                       <img class=\"img-fluid\" src=\"assets/img/serv-nine.jpg\" alt=\"Educational Tours\">\n                       <p class=\"title\"><a href=\"educational-tours.php\">Educational Tours</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n                    <div class=\"serv-inner\">\n                        <img class=\"img-fluid\" src=\"assets/img/serv-ten.jpg\" alt=\"School Bus\">\n                        <p class=\"title\"><a href=\"school-bus.php\">School Bus</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n                    <div class=\"serv-inner\">\n                        <img class=\"img-fluid\" src=\"assets/img/serv-eleven.jpg\" alt=\"Event Management\">\n                        <p class=\"title\"><a href=\"event-management.php\">Event Management</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n                    <div class=\"serv-inner\">\n                        <img class=\"img-fluid\" src=\"assets/img/serv-twelve.jpg\" alt=\"Training Programs\">\n                        <p class=\"title\"><a href=\"training-programs.php\">Training Programs</a></p>\n                    </div>\n                  </div>\n\n               </div>               \n\n             </div>\n\n             <div class=\"item\">\n\n               <div class=\"row no-gutters\">\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n                    <div class=\"serv-inner\">\n                      <img class=\"img-fluid\" src=\"assets/img/serv-thirteen.jpg\" alt=\"Testing Tools\">\n                      <p class=\"title\"><a href=\"testing-tools.php\">Testing Tools</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n                    <div class=\"serv-inner\">\n                       <img class=\"img-fluid\" src=\"assets/img/serv-fourteen.jpg\" alt=\"Advertisements\">\n                       <p class=\"title\"><a href=\"advertisements.php\">Advertisements</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 up\">\n                    <div class=\"serv-inner\">\n                       <img class=\"img-fluid\" src=\"assets/img/serv-fifteen.jpg\" alt=\"Placement Assistance\">\n                       <p class=\"title\"><a href=\"placement-assistance.php\">Placement Assistance</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n                    <div class=\"serv-inner\">\n                        <img class=\"img-fluid\" src=\"assets/img/serv-sixteen.jpg\" alt=\"Designing and Printing\">\n                        <p class=\"title\"><a href=\"designing-printing.php\">Designing and Printing</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n                    <div class=\"serv-inner\">\n                        <img class=\"img-fluid\" src=\"assets/img/serv-seventeen.jpg\" alt=\"Designing and Construction\">\n                        <p class=\"title\"><a href=\"designing-construction.php\">Designing and Construction</a></p>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4 col-sm-6 col-12 down\">\n                    <div class=\"serv-inner\">\n                        <img class=\"img-fluid\" src=\"assets/img/serv-eightenn.jpg\" alt=\"Buy/Sell/ Collaboration\">\n                        <p class=\"title\"><a href=\"buy-sell.php\">Buy/Sell/ Collaboration</a></p>\n                    </div>\n                  </div>\n\n               </div>               \n\n             </div>\n\n\n           </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <!-- services ends -->\n\n\n\n\n\n<!-- team starts -->\n\n<!-- <div class=\"main-con box-con team-con\">\n  <div class=\"container\">\n     <div class=\"team-inner\">\n        <h2>Meet The Team</h2>\n        <p>We built ourselves brick by brick with cemented dedication and hard work. Meet our supportive figures!</p>\n        <div class=\"team-slider\">\n           <div class=\"owl-carousel owl-theme team-carousel\">\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mr. Vincent Philip\">\n                 <div class=\"team-title\">\n                   <h6><strong>Mr. Vincent Philip </strong></h6>\n                   <p>Founder and CEO</p>\n                 </div>\n               </div>\n             </div>\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mrs. Reena Charles\">\n                  <div class=\"team-title\">\n                   <h6><strong>Mrs. Reena Charles </strong></h6>\n                   <p>Managing Director/Educational Trainer</p>\n                 </div>\n               </div>\n             </div>\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mr. Soni\">\n                  <div class=\"team-title\">\n                   <h6><strong>Mr. Soni </strong></h6>\n                   <p>Director</p>\n                 </div>\n               </div>\n             </div>\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mr. Padma Prabha\">\n                 <div class=\"team-title\">\n                   <h6><strong>Mr. Padma Prabha </strong></h6>\n                   <p>Director Sales</p>\n                 </div>\n               </div>\n             </div>\n\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mrs. Mini John\">\n                  <div class=\"team-title\">\n                   <h6><strong>Mrs. Mini John </strong></h6>\n                   <p>Director Sales</p>\n                 </div>\n               </div>\n             </div>\n\n\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mr. George\">\n                  <div class=\"team-title\">\n                   <h6><strong>Mr. George</strong></h6>\n                   <p>Educational Trainer</p>\n                 </div>\n               </div>\n             </div>\n\n\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mr. William\">\n                 <div class=\"team-title\">\n                   <h6><strong>Mr. William </strong></h6>\n                   <p>Educational Trainer</p>\n                 </div>\n               </div>\n             </div>\n\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Mr. Joy\">\n                  <div class=\"team-title\">\n                   <h6><strong>Mr. Joy</strong></h6>\n                   <p>Business Development Manager</p>\n                 </div>\n               </div>\n             </div>\n\n\n\n             <div class=\"item\">\n               <div class=\"main-team\">\n                 <img class=\"img-fluid\" src=\"img/no-image.jpg\" alt=\"Miss Shilija\">\n                 <div class=\"team-title\">\n                   <h6><strong>Miss Shilija</strong></h6>\n                   <p>Office Administrator</p>\n                 </div>\n               </div>\n             </div>\n\n           </div>\n\n        </div>\n\n\n     </div>\n\n  </div>\n\n</div> -->\n\n<!-- tema ends -->\n\n\n\n\n\n\n\n<!-- customers starts -->\n\n<div class=\"main-con box-con\">\n\n  <div class=\"container\">\n\n    <div class=\"customer-inner\">\n\n       <h2>Diversified Requirements, Diversified Solutions</h2>\n\n        <p>SchoolShoppe offers resources to educational institutes with excellence. We have tie-ups with 130 companies to deliver exclusive services at your doorstep. </p>\n\n\n\n         <div class=\"team-slider\">\n\n           <div class=\"owl-carousel owl-theme client-carousel\">\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/angel.jpg\" alt=\"Angel\">\n              <p>Fr. Agnel School, Noida</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/francis-world.jpg\" alt=\"Francis World\">\n              <p>St. Francis World School, Meerut</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/holy-child.jpg\" alt=\"Holy Child\">\n              <p>Holy Child Senior Secondary School</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/holy-child-gaziabad.jpg\" alt=\"Holy Child Gaziabad\">\n              <p>Holy Child School, Ghaziabad</p>\n             </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/holy-child-sec.jpg\" alt=\"Holy Child Sec\">\n              <p>Holy Child Sr. Sec. School, Sonipat.</p>\n             </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/indirapuram.jpg\" alt=\"Indirapuram\">\n              <p>St. Francis School Indirapuram</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/josephs.jpg\" alt=\"Josephs\">\n              <p>St. Joseph's Academy</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/josephs-noida.jpg\" alt=\"Josephs Noida\">\n              <p>St. Joseph's School, Greater Noida</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/mary.jpg\" alt=\"Mary\">\n              <p>St. mary's school</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/paul.jpg\" alt=\"Paul\">\n              <p>St. Paul's Academy</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/peter-college.jpg\" alt=\"Peter College\">\n              <p>St. Peter's College</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/francis-rachi.jpg\" alt=\"St Francis School, Ranchi\">\n              <p>St Francis School, Ranchi</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/francis-banglore.jpg\" alt=\"St Francis School, Koramangala, Bangalore\">\n              <p>St. Francis School, Koramangala, Bangalore</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/francis-mumbai.jpg\" alt=\"St Francis School, Boriavali, Mumbai\">\n              <p>St. Francis School, Boriavali, Mumbai</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/blue-mount.jpg\" alt=\"Blue Mount School\">\n              <p>Blue Mount School</p>\n            </div>\n\n\n\n             <div class=\"item\">\n              <img class=\"img-fluid\" src=\"assets/img/clients/sacred-heart.jpg\" alt=\"Sacred Heart Convent School, Sarabha Nagar, Ludhiana\">\n              <p>Sacred Heart Convent School, Sarabha Nagar, Ludhiana</p>\n            </div>\n\n           </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<!-- customers ends -->\n\n\n\n<!-- scope satsrt -->\n\n<div class=\"main-con box-con scope-con\">\n\n  <div class=\"container\">\n\n    <div class=\"scope-inner\">\n\n      <h2>Why School Shoppe ?</h2>\n\n      <p>SchoolShoppe serves with a smile and strives to become admired leaders in the education sector. Whatever we promise we ensure, we deliver it 100 %. Our team is ready to walk the extra mile to meet your educational needs. We agree that earnings and commercial success are mandatory to any business venture, but for us, it's more about customer joy and delight with all rich expertise that is offered at our platform. </p>\n\n      <ul>\n\n        <li>Cost-Effective</li>\n\n        <li>Quality-Rich</li>\n\n        <li>Quality-Rich</li>\n\n        <li>Resourceful </li>\n\n        <li>24/7 Customer Support</li>\n\n        <li>Transparent Work Policies</li>\n\n      </ul>\n\n      <p>We walk forward with a mission to make an online educational revolution and iron out the flaws in the current set up of rote learning. Contributing to bring about a change in such an approach is a much larger goal at multiple levels. So, for now, we are focused on achieving visible change through SchoolShoppe.</p>\n\n    </div>\n\n  </div>\n\n</div>\n\n<!-- scope ends -->\n\n\n\n<!-- video con starst -->\n\n<div class=\"main-con box-con\">\n\n  <div class=\"container\">\n\n    <div class=\"video-inner\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-12\">\n\n          <div class=\"hire\">\n\n            <div class=\"hire-inner\">\n\n              <h4>We Are Hiring</h4>\n\n              <p>Come together to make our mission successful! </p>\n\n              <p>Sometimes Hiring is not important, Coffee is!</p>\n\n              <a href=\"career.php\" class=\"btn-blank hvr-shutter-in-vertical\">Apply Now</a>\n\n            </div>\n\n          </div>    \n\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n\n          <div class=\"video-main\">\n\n            <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSchool-Shoppe-228418904758825&tabs=timeline&width=598&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2075587012485363\" width=\"598\" height=\"300\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\"></iframe>\n\n          </div>   \n\n        </div>\n\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-12\">\n\n          <div class=\"newsletter\">\n\n            <div class=\"news-inner\">\n\n              <h4>Newsletter signup</h4>\n\n              <p>Sign up our Newsletter to know everything we do! </p>\n\n                <form>\n\n                      <input type=\"text\" placeholder=\"Enter Email Address\" name=\"txtemail\" class=\"form-control\">\n\n                      <button class=\"btn-blank hvr-shutter-in-vertical\">Subscribe now</button>\n\n                </form>\n\n            </div>\n\n          </div> \n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-con main-banner innr-bannr\">\n\n       <div class=\"container\">\n\n         <div class=\"banner-inner\">\n\n           <div class=\"banner-cap\">\n\n           </div>\n\n         </div>\n\n       </div>\n\n     </div>\n\n    <!-- banner ends -->\n\n    \n\n\n\n<div class=\"cntct-school\">\n\n  <div class=\"container\">\n\n      <h2>Contact Us</h2>\n\n    <div class=\"school-innr\">\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n\n            <div class=\"contact-frm\">\n\n              <h3>Send us a message</h3>\n\n                <form class=\"myform\" id=\"upload_re\" name=\"upload_re\" method=\"post\" data-parsley-validate (ngSubmit)=\"onSubmit($event)\" #contactForm=\"ngForm\">\n             \n              <div class=\"row\">\n\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"txtfname\" id=\"txtfname\" [(ngModel)]=\"txtfname\" #fname=\"ngModel\" required minlength=\"6\">\n                      <div  *ngIf=\"fname.invalid && (fname.touched || fname.dirty)\">\n                      <span *ngIf=\"fname.hasError('required')\">First Name is required*</span>\n                      <span *ngIf=\"fname.hasError('minlength')\">Minimum 6 character required*</span>\n                    </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"txtlname\" id=\"txtlname\"  [(ngModel)]=\"txtlname\" #lname=\"ngModel\" required>\n                    <div  *ngIf=\"lname.invalid && (lname.touched || lname.dirty)\">\n                      <span *ngIf=\"lname.hasError('required')\">Last Name is required*</span>\n                      \n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" name=\"txtemail\" id=\"txtemail\"  [(ngModel)]=\"txtemail\" #email=\"ngModel\" required email>\n                       <div  *ngIf=\"email.invalid && (email.touched || email.dirty)\">\n                      <span *ngIf=\"email.hasError('required')\">Email is required*</span>\n                       <span *ngIf=\"email.hasError('email')\">Valid Email is required*</span>\n                      \n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" name=\"txtphn\" id=\"txtphn\" [(ngModel)]=\"txtphn\" #phn=\"ngModel\" required  >\n  <div  *ngIf=\"phn.invalid && (phn.touched || phn.dirty)\">\n                      <span *ngIf=\"phn.hasError('required')\">Phone is required*</span>\n                      \n                        \n                      \n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                  <div class=\"form-group\">\n                    <textarea class=\"form-control\" placeholder=\"Message\" name=\"txtmsg\" id=\"txtmsg\" [(ngModel)]=\"txtmsg\" #msg=\"ngModel\"  required></textarea>\n\n                      <span *ngIf=\"msg.invalid && (msg.touched || msg.dirty)\">Message is required*</span>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                 \n  <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"contactForm.invalid || contactForm.pristine\">Send message</button>\n                </div>\n\n              </div>\n\n                </form>\n\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n\n            <div class=\"get-touch\">\n\n              <h3>Get In Touch</h3>\n\n              <ul>\n\n                <li><i class=\"fas fa-map-marker-alt\"></i>\n\n                  <p><span> Regd. Office: </span>D-41/807 Chhaterpur Pahari <br>( 100 mtrs from Qutub Minar Metro Stn.)<br>Delhi -110030</p> \n\n                </li>\n\n                <li><i class=\"fas fa-map-marker-alt\"></i>\n\n                  <p><span> Noida Office: </span>C-242, Sector 63, Noida (UP)</p>\n\n                </li>\n\n                <li><i class=\"fas fa-map-marker-alt\"></i>\n\n                   <p><span>Kerala Regional Office: </span>ReLake Vechoor<br> Villas, Vechoor,Ambika Market, Near Thanneermukkom Bund, Vaikom,<br> Kottayam - 686144</p>\n\n                </li>\n\n                <li><i class=\"fas fa-phone-volume\"></i>\n\n                  <p><a href=\"tel:9958110099\">9958110099</a>, <a href=\"tel:9818794888\">9818794888</a>, <a href=\"tel:9991563334\">9991563334 </a></p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div class=\"map\">\n\n  <div class=\"container\">\n\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8916028775257!2d77.18418816473459!3d28.512908846236556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e1bb63b9807%3A0xa57acdd483713d7e!2sQutab+Minar+Metro+Station%2C+Mittal+Garden%2C+Sainik+Farm%2C+New+Delhi%2C+Delhi+110016!5e0!3m2!1sen!2sin!4v1555414816102!5m2!1sen!2sin\" width=\"1100\" height=\"350\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n  </div>\n\n</div>\n\n\n\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"main-con footer-con\">\n\n  <div class=\"container\">\n\n\t<div class=\"footer-inner\">\n\n\t<ul class=\"socail-list\">\n\n\t\t<li><a href=\"https://www.facebook.com/School-Shoppe-228418904758825\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n\n\t\t<li><a href=\"https://twitter.com/ShoppeSchool\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\n\n\t\t<li><a href=\"https://www.linkedin.com/company/school-shoppe/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a></li>\n\n\t\t<li><a href=\"https://www.instagram.com/school_shoppe/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li>\n\n\t\t<li><a href=\"https://www.youtube.com/channel/UCy488Zl_lQXnFeaAWYL7aVA\" target=\"_blank\"><i class=\"fab fa-youtube\"></i></a></li>\n\n\t\t<li><a href=\"https://www.pinterest.co.uk/schoolshoppe001/\" target=\"_blank\"><i class=\"fab fa-pinterest-p\"></i></a></li>\n\n\t</ul>\n\n\t<ul>\n\n\t\t<li><a href=\"about-us.php\">About Us</a></li>\n\n\t\t<li><a href=\"career.php\">Careers</a></li>\n\n\t\t<li><a href=\"contact-us.php\">Contact Us</a></li>\n\n\t\t<li><a href=\"privacy-policy.php\">Privacy Policy</a></li>\n\n\t\t<li><a href=\"#\">Sitemap</a></li>\n\n\t</ul>\n\n\t<p>&copy; Copyright <a href=\"index.php\">SchoolShoppe</a>. 2019, All Rights Reserved. | Website by <a href=\"https://www.digifish3.com/\" target=\"_blank\">Digifish3.com</a></p>\n\n\t</div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-con main-header\">\n  <div class=\"container\">\n    <div class=\"header-inner\">\n       <nav class=\"navbar navbar-expand-lg navbar-light\">\n  <a class=\"navbar-brand\" href=\"home.php\">\n    <img class=\"img-fluid logo-main\" src=\"assets/img/logo.png\" alt=\"school shoppe logo\">\n    <img class=\"img-fluid logo-new\" src=\"assets/img/logo-new.png\" alt=\"school shoppe logo\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      \n      <li class=\"nav-item home\" >\n        <a class=\"nav-link\" routerLink=\"/\"  >Home</a>\n      </li>\n\n     <li class=\"nav-item about\">\n        <a class=\"nav-link\" routerLink=\"/about-us\">About Us</a>\n      </li>\n\n      <li class=\"nav-item school\">\n        <a class=\"nav-link\" routerLink=\"/i-am-a-school\">I am a School</a>\n      </li>\n\n      <li class=\"nav-item student\">\n        <a class=\"nav-link\" routerLink=\"/i-am-a-student\">I am a Student/Parent</a>\n      </li>\n\n      <li class=\"nav-item career\">\n        <a class=\"nav-link\" routerLink=\"/career\">Career</a>\n      </li>\n\n      <li class=\"nav-item contact\">\n        <a class=\"nav-link\" routerLink=\"/contact-us\">Contact Us</a>\n      </li>\n\n      \n                                                          \n    </ul>\n   \n  </div>\n</nav>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/i-am-a-school/i-am-a-school.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/i-am-a-school/i-am-a-school.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- banner starts -->\n\n     <div class=\"main-con main-banner innr-bannr\">\n\n       <div class=\"container\">\n\n         <div class=\"banner-inner\">\n\n           <div class=\"banner-cap\">\n\n           </div>\n\n         </div>\n\n       </div>\n\n     </div>\n\n    <!-- banner ends -->\n\n    \n\n\n\n<div class=\"abt-school\">\n\n  <div class=\"container\">\n\n    <div class=\"school-innr\">\n\n      <h2>I am a School</h2>\n\n      <p>SchoolShoppe offers a plethora of school prerequisite solutions to ensure speed, convenience, and cost-effectiveness without compromising the quality of products and services. It is the customer's delight that keeps us going while adventuring the thrill of overcoming challenges. Our steadfast team ensures that educational organizations meet the core responsibilities and handles other duties. Allow us to lend you a helping hand! </p>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div class=\"serv_\">\n\n  <div class=\"container\">\n\n      <h2>Our Services</h2>\n\n    <div class=\"service_innr\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"educational-technology.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/education-technology.png\" alt=\"Educational Technology\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Educational Technology</h3>\n                  <p>In most of the scenarios, the school interacts with many vendors who approach it with seemingly endless products and services related to day-to-day constructional demands. We cater to all educational and school needs at one convenient source. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"software-management.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/school-magement.png\" alt=\"School Management Software\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>School Management Software</h3>\n                  <p>School Management is not an easy task, and maximum manpower is exhausted in School Management only. SchoolShoppe offers School Management Software to manage admissions, fee depositories, staff management and much more.</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"books.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/books.png\" alt=\"Books\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Books</h3>\n                  <p>Books are the best friends, and at SchoolShoppe we appreciate the scholarly bond. Whether it is for Parents, schools, or Students, our resourceful library has it all to feed the reading minds. We provide reading banks at affordable prices. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"uniform.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/uniform.png\" alt=\"Uniform/Accessories\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Uniform/Accessories</h3>\n                  <p>Uniforms at best prices, SchoolShoppe offers school dresses and uniform fabrics to both schools and students. Count us as a convenience store or retail outlets that act like a mega mall offering myriad options with specialized choices in every category.  </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>       \n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"furniture.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/furniture.png\" alt=\"Furniture/ Accessories\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Furniture / Accessories</h3>\n                  <p>Furniture demands have found a new address, at SchoolShoppe you can order all types of furniture and accessory requirements to keep the School space furnished. Feel free to explore our menu that offers Smart Class/Smart Board, Equipment for big-ticket events such as Annual Day/Sports Day etcetera, Labs, Office furniture and much more. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"labs.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/research.png\" alt=\"Labs\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Labs</h3>\n                  <p>Research and innovation meet together and train young brains to achieve success. Labs play a vital role in imparting practical knowledge to innocent minds. Our portal has stored all resources to equip schools with all Lab requirements.</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"sports-solutions.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/sports.png\" alt=\"Sports Solutions\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Sports Solutions</h3>\n                  <p>Sachin Tendulkar said, \"Sports teach us Lessons which cannot be taught on the blackboard.\" We abide by this, ScholShoppe offers extremely valuable Sports Solutions to overall development of a child. Not just learning, but learn as you grow and play. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"musical-instruments.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/musical.png\" alt=\"Musical Instruments\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Musical Instruments</h3>\n                  <p>Unleash the musical side with School Shoppe Musical Instrument collection. Our quality instruments will fill the souls with happiness to achieve a rhythmic balance in life. Train your budding rock stars with euphonious instruments at feasible prices. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"educational-tours.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/tour.png\" alt=\"Educational Tour\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Educational Tour</h3>\n                  <p>Change the environment, and you can change the knowledge bar. Want assistance on educational tours? Our talented team can take all the plumbing work of arranging educational tours for school going children and teachers. Arrange academic tours to promote happy learning!  </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"school-bus.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/bus.png\" alt=\"School Bus\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>School Bus</h3>\n                  <p>Pave road to education, SchoolShoppe apprehends the needs and demands of School Commuting. Our School Bus services offer customized vehicle bodies to create a benchmark in the school transport sector. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"event-management.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/management.png\" alt=\"Event Management\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Event Management </h3>\n                  <p>SchoolShoppe's unparalleled price advantage has got a win-win deal for every reason. Our optimums Event Management Solutions fine-tune requirements of each school and the resources. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"training-programs.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/training.png\" alt=\"Training Programs\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Training Programs</h3>\n                  <p>SchoolShoppe helps you conduct Training Programs for teachers and staff members. We provide Training Programs to parents and students as well to fully equip them with the latest updates in industry. Check our resources and move in the direction of excellence!</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"testing-tools.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/testing.png\" alt=\"Testing Tools\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Testing Tools</h3>\n                  <p>DMIT and Online Intelligence Tests are curated to provide brain storming exercise to teachers and students. School Shoppe offers benefits of Testing Tools all done to enhance the sharpness and thoughts clarity. Our team lends assistance with all educational essentials. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"advertisements.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/advertisement.png\" alt=\"Advertisements\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Advertisements</h3>\n                  <p>Not getting enough admissions? SchoolShoppe will assist you in reaching masses and get enrollments to your school. Consult with us for assistance on advertisement and we will take your advertising campaign to generate leads. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"placement-assistance.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/placement.png\" alt=\"Placement Assistance\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Placement Assistance</h3>\n                  <p>Finding talented and responsible teachers and staff members can land you in the rock-hardening situation. SchoolShoppe is the only destination to provide needed guidance and placement assistance. Our expert team makes sure that you get qualified and well-deserved candidates. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"designing-printing.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/designing.png\" alt=\"Designing and Printing\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Designing and Printing</h3>\n                  <p>Beautiful Designs attracts million hearts! While working with us, we fix on designing and printing duties that give you time to focus on core duties. Let's share the responsibilities to make it work!</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"designing-construction.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/contruct-design.png\" alt=\"Designing and Construction\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Designing and Construction</h3>\n                  <p>Have goals of constructing a School Building? We endeavor the designing and construction of school buildings with the help of our prolific constructors. SchoolShoppe stands with you in a brick-by-brick construction process. Let's walk hand-in-hand to bring a change!</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"buy-sell.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/collaboration.png\" alt=\"Buy/Sell/ Collaboration\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Buy/Sell/ Collaboration</h3>\n                  <p>SchoolShoppe presents Buy/Sell/Collaboration assistance to educationists, investors, and landowners to own/sell a school property. From checking assets to paperwork, we cater to all the demands of our clients with a humble smile.</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"consultancy-services.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/consultancy.png\" alt=\"Consultancy Services\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Consultancy Services</h3>\n                  <p>Whether it is Affiliation or establishment, SchoolShoppe has a solution to all difficulties. Our Legal partners and expert panel can sit with authorities to find out a legal solution to disputes. Yes! We do it all!</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"other-services.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/solar.png\" alt=\"Other Services\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Other Services</h3>\n                  <p>Amidst the educational technology, educational institutes are in dire need of Hygiene, Water-purifiers, Solar Energy Solutions and many others. SchoolShoppe assures to take on the leadership of providing these services at reasonable rates. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"csr-activities.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/csr.png\" alt=\"CSR Activities\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>CSR Activities</h3>\n                  <p>Gift a Little! We all have the little privilege of offering small things to each other. Join our CSR Activities and adopt a child's education or donate educational resources to the unprivileged. Bring on the Change for happy souls. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"publisher.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img src=\"assets/img/service/publish.png\" alt=\"CSR Activities\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Publisher</h3>\n                  <p>SchoolShoppe has partnered with numerous Publishers to make Students, Teachers, and Parents access the most-noted books and readings of prolific writers and learned men. From Course Books to Competitive Books, our publisher's list has it all for our clients. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/i-am-a-student/i-am-a-student.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/i-am-a-student/i-am-a-student.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-con main-banner innr-bannr\">\n\n       <div class=\"container\">\n\n         <div class=\"banner-inner\">\n\n           <div class=\"banner-cap\">\n\n           </div>\n\n         </div>\n\n       </div>\n\n     </div>\n\n    <!-- banner ends -->\n\n    \n\n\n\n<div class=\"abt-school\">\n\n  <div class=\"container\">\n\n    <div class=\"school-innr\">\n\n      <h2>I am a Student/Parent</h2>\n\n      <p>As parents, you invest your precious hopes for the all-round development of your child who enters the educational arena as a toddler. With the dreams to witness the transformation from an innocent child to confident individuals, we value your sentiments. At SchoolShoppe, we provide hassle-free service at your doorstep via Online Book Shop, School Uniforms, and accessories for students. Let's join hands to motivate young minds with useful resources! </p>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div class=\"serv_\">\n\n  <div class=\"container\">\n\n      <h2>Our Services</h2>\n\n    <div class=\"service_innr\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"books.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-down\" data-aos-duration=\"2000\" src=\"assets/img/service/books.png\" alt=\"Books\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Books</h3>\n                  <p>Books are the best friends, and at SchoolShoppe we appreciate the scholarly bond. Whether it is for Parents, schools, or Students, our resourceful library has it all to feed the reading minds. We provide reading banks at affordable prices. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"uniform.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-up\" data-aos-duration=\"3000\" src=\"assets/img/service/uniform.png\" alt=\"Uniform/Accessories\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Uniform/Accessories</h3>\n                  <p>Uniforms at best prices, SchoolShoppe offers school dresses and uniform fabrics to both schools and students. Count us as a convenience store or retail outlets that act like a mega mall offering myriad options with specialized choices in every category.  </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>   \n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"sports-solutions.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-down\" data-aos-duration=\"2000\" src=\"assets/img/service/sports.png\" alt=\"Sports Solutions\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Sports Solutions</h3>\n                  <p>Sachin Tendulkar said, \"Sports teach us Lessons which cannot be taught on the blackboard.\" We abide by this, ScholShoppe offers extremely valuable Sports Solutions to overall development of a child. Not just learning, but learn as you grow and play. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"musical-instruments.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-up\" data-aos-duration=\"3000\" src=\"assets/img/service/musical.png\" alt=\"Musical Instruments\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Musical Instruments</h3>\n                  <p>Unleash the musical side with School Shoppe Musical Instrument collection. Our quality instruments will fill the souls with happiness to achieve a rhythmic balance in life. Train your budding rock stars with euphonious instruments at feasible prices. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"training-programs.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-down\" data-aos-duration=\"2000\" src=\"assets/img/service/training.png\" alt=\"Training Programs\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Training Programs</h3>\n                  <p>SchoolShoppe helps you conduct Training Programs for teachers and staff members. We provide Training Programs to parents and students as well to fully equip them with the latest updates in industry. Check our resources and move in the direction of excellence!</p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"testing-tools.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-up\" data-aos-duration=\"3000\" src=\"assets/img/service/testing.png\" alt=\"Testing Tools\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Testing Tools</h3>\n                  <p>DMIT and Online Intelligence Tests are curated to provide brain storming exercise to teachers and students. School Shoppe offers benefits of Testing Tools all done to enhance the sharpness and thoughts clarity. Our team lends assistance with all educational essentials. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"placement-assistance.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-down\" data-aos-duration=\"2000\" src=\"assets/img/service/placement.png\" alt=\"Placement Assistance\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>Placement Assistance</h3>\n                  <p>Finding talented and responsible teachers and staff members can land you in the rock-hardening situation. SchoolShoppe is the only destination to provide needed guidance and placement assistance. Our expert team makes sure that you get qualified and well-deserved candidates. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n          <a href=\"csr-activities.php\" class=\"srv-innr hvr-float-shadow\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-12\">\n                <div class=\"seric-img\">\n                  <img data-aos=\"flip-up\" data-aos-duration=\"3000\" src=\"assets/img/service/csr.png\" alt=\"CSR Activities\" class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-12\">\n                <div class=\"seric-content\">\n                  <h3>CSR Activities</h3>\n                  <p>Gift a Little! We all have the little privilege of offering small things to each other. Join our CSR Activities and adopt a child's education or donate educational resources to the unprivileged. Bring on the Change for happy souls. </p>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutUsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _center_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./center/center.component */ "./src/app/center/center.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _i_am_a_school_i_am_a_school_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i-am-a-school/i-am-a-school.component */ "./src/app/i-am-a-school/i-am-a-school.component.ts");
/* harmony import */ var _i_am_a_student_i_am_a_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i-am-a-student/i-am-a-student.component */ "./src/app/i-am-a-student/i-am-a-student.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");









const routes = [
    {
        path: '',
        component: _center_center_component__WEBPACK_IMPORTED_MODULE_3__["CenterComponent"]
    },
    {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]
    },
    {
        path: 'i-am-a-school',
        component: _i_am_a_school_i_am_a_school_component__WEBPACK_IMPORTED_MODULE_5__["IAmASchoolComponent"]
    },
    {
        path: 'i-am-a-student',
        component: _i_am_a_student_i_am_a_student_component__WEBPACK_IMPORTED_MODULE_6__["IAmAStudentComponent"]
    },
    {
        path: 'career',
        component: _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"]
    },
    {
        path: 'contact-us',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'ssang';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _center_center_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./center/center.component */ "./src/app/center/center.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _i_am_a_school_i_am_a_school_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i-am-a-school/i-am-a-school.component */ "./src/app/i-am-a-school/i-am-a-school.component.ts");
/* harmony import */ var _i_am_a_student_i_am_a_student_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./i-am-a-student/i-am-a-student.component */ "./src/app/i-am-a-student/i-am-a-student.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"],
            _center_center_component__WEBPACK_IMPORTED_MODULE_8__["CenterComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
            _i_am_a_school_i_am_a_school_component__WEBPACK_IMPORTED_MODULE_10__["IAmASchoolComponent"],
            _i_am_a_student_i_am_a_student_component__WEBPACK_IMPORTED_MODULE_11__["IAmAStudentComponent"],
            _career_career_component__WEBPACK_IMPORTED_MODULE_12__["CareerComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/banner/banner.component.html"),
        styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BannerComponent);



/***/ }),

/***/ "./src/app/career/career.component.css":
/*!*********************************************!*\
  !*** ./src/app/career/career.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CareerComponent = class CareerComponent {
    constructor(_fb) {
        this._fb = _fb;
    }
    ngOnInit() {
        this.careerForm = this._fb.group({
            uname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
    }
    unameErrors() {
        return this.careerForm.controls['uname'].hasError('required') ? "Name is required field" : '';
    }
    onSubmit(frm) {
        console.log(this.careerForm.value);
    }
};
CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-career',
        template: __webpack_require__(/*! raw-loader!./career.component.html */ "./node_modules/raw-loader/index.js!./src/app/career/career.component.html"),
        styles: [__webpack_require__(/*! ./career.component.css */ "./src/app/career/career.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], CareerComponent);



/***/ }),

/***/ "./src/app/center/center.component.css":
/*!*********************************************!*\
  !*** ./src/app/center/center.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlci9jZW50ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/center/center.component.ts":
/*!********************************************!*\
  !*** ./src/app/center/center.component.ts ***!
  \********************************************/
/*! exports provided: CenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterComponent", function() { return CenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CenterComponent = class CenterComponent {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../assets/js/main.js";
        this.el.nativeElement.appendChild(s);
    }
};
CenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-center',
        template: __webpack_require__(/*! raw-loader!./center.component.html */ "./node_modules/raw-loader/index.js!./src/app/center/center.component.html"),
        styles: [__webpack_require__(/*! ./center.component.css */ "./src/app/center/center.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CenterComponent);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ContactUsComponent = class ContactUsComponent {
    constructor(_http, el) {
        this._http = _http;
        this.el = el;
        this.txtfname = '';
        this.txtlname = '';
        this.txtemail = '';
        this.txtphn = '';
        this.txtmg = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        const e = new FormData(this.el.nativeElement.querySelector('form'));
        e.append('caseno', btoa('2'));
        console.log(e);
        this._http.post('https://webmitr.com/PROJECTS/Test3/school-shopee/mail.php', e).subscribe(result => console.log(result), (err) => console.log(err), () => console.log('success'));
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/i-am-a-school/i-am-a-school.component.css":
/*!***********************************************************!*\
  !*** ./src/app/i-am-a-school/i-am-a-school.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ktYW0tYS1zY2hvb2wvaS1hbS1hLXNjaG9vbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/i-am-a-school/i-am-a-school.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/i-am-a-school/i-am-a-school.component.ts ***!
  \**********************************************************/
/*! exports provided: IAmASchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAmASchoolComponent", function() { return IAmASchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IAmASchoolComponent = class IAmASchoolComponent {
    constructor() { }
    ngOnInit() {
    }
};
IAmASchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-i-am-a-school',
        template: __webpack_require__(/*! raw-loader!./i-am-a-school.component.html */ "./node_modules/raw-loader/index.js!./src/app/i-am-a-school/i-am-a-school.component.html"),
        styles: [__webpack_require__(/*! ./i-am-a-school.component.css */ "./src/app/i-am-a-school/i-am-a-school.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IAmASchoolComponent);



/***/ }),

/***/ "./src/app/i-am-a-student/i-am-a-student.component.css":
/*!*************************************************************!*\
  !*** ./src/app/i-am-a-student/i-am-a-student.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ktYW0tYS1zdHVkZW50L2ktYW0tYS1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/i-am-a-student/i-am-a-student.component.ts":
/*!************************************************************!*\
  !*** ./src/app/i-am-a-student/i-am-a-student.component.ts ***!
  \************************************************************/
/*! exports provided: IAmAStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAmAStudentComponent", function() { return IAmAStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IAmAStudentComponent = class IAmAStudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
IAmAStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-i-am-a-student',
        template: __webpack_require__(/*! raw-loader!./i-am-a-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/i-am-a-student/i-am-a-student.component.html"),
        styles: [__webpack_require__(/*! ./i-am-a-student.component.css */ "./src/app/i-am-a-student/i-am-a-student.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IAmAStudentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\wamp\www\ssang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map