<template>
  <div class="failed-page">
   <v-layout row justify-center>
       <v-flex xs11 sm10 md9 xl6>
           <!-- First Section -->
            <div class="border-bottom" style="padding-bottom:30px">
                <v-layout row wrap class="success-message">
                   
                        <svg id="Iconly_Light_Tick_Square" data-name="Iconly/Light/Tick Square" xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83">
                            <circle id="Ellipse_77" data-name="Ellipse 77" cx="41.5" cy="41.5" r="41.5" fill="#ffe7e7"/>
                            <g id="Ellipse_78" data-name="Ellipse 78" transform="translate(9 9)" fill="#fff" stroke="#f0252b" stroke-width="3">
                                <circle cx="32.5" cy="32.5" r="32.5" stroke="none"/>
                                <circle cx="32.5" cy="32.5" r="31" fill="none"/>
                            </g>
                            <g id="Group_1345" data-name="Group 1345" transform="translate(22.6 22.6)">
                                <path id="Path_1062" data-name="Path 1062" d="M0,0H38.8V38.8H0Z" fill="none"/>
                                <line id="Line_67" data-name="Line 67" x1="20" y2="20" transform="translate(9.4 9.4)" fill="none" stroke="#f0252b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                <line id="Line_68" data-name="Line 68" x2="20" y2="20" transform="translate(9.4 9.4)" fill="none" stroke="#f0252b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            </g>
                        </svg>
                        <span class="success-message__span1 theme-red">Failed!</span>
                        <span class="success-message__span2">Oops! something went wrong please try again</span>
                </v-layout>
                <div class="failed-pattern">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97" height="81" viewBox="0 0 97 81">
                        <defs>
                            <clipPath id="clip-path">
                            <rect id="Rectangle_9" data-name="Rectangle 9" width="97" height="81" fill="#f2f2f2"/>
                            </clipPath>
                        </defs>
                        <g id="Mask_Group_2" data-name="Mask Group 2" opacity="0.32" clip-path="url(#clip-path)">
                            <path id="Ellipse_2" data-name="Ellipse 2" d="M94.885,133.086c36.012,0,65.311-23.217,65.311-51.756S130.9,29.575,94.885,29.575,29.575,52.792,29.575,81.33s29.3,51.756,65.311,51.756m0,29.575C42.482,162.66,0,126.248,0,81.33S42.482,0,94.885,0,189.77,36.413,189.77,81.33,147.289,162.66,94.885,162.66Z" transform="translate(0.441 -81.495)" fill="#ffe7e7"/>
                        </g>
                        </svg>
                </div>
            </div>
            <!-- Second Section -->
            <div class="border-bottom">
                <v-layout>
                    <v-expansion-panel class="order-details-accordion  success-accordion side-arrow border-none-m">
                        <v-expansion-panel-content
                        >
                        <template v-slot:header>
                            <div class="accordion-header success-accordion">
                                <svg id="Group_1312" data-name="Group 1312" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path id="Path_1041" data-name="Path 1041" d="M0,0H24V24H0Z" fill="none"/>
                                <rect id="Rectangle_82" data-name="Rectangle 82" width="18" height="14" rx="3" transform="translate(3 5)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="ico"/>
                                <line id="Line_54" data-name="Line 54" x2="18" transform="translate(3 10)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="ico"/>
                                <line id="Line_55" data-name="Line 55" x2="0.01" transform="translate(7 15)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="ico"/>
                                <line id="Line_56" data-name="Line 56" x2="2" transform="translate(11 15)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="ico"/>
                                </svg>

                               <div class="accordion-heading"> 
                                <span class="icon-text">Payment Details</span>
                               <span class="theme-red mr">Not Captured</span>
                               </div> 
                            </div>
                        </template>
                        <v-card>
                           <v-layout row wrap>
                               <v-flex  xs12 sm6 md4>
                                   <v-card class="ma-10 rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="20" viewBox="0 0 87 20">
                                                    <g id="Group_1321" data-name="Group 1321" transform="translate(-18 -13)">
                                                        <text id="order_no." data-name="order no." transform="translate(46 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Order No.</tspan></text>
                                                        <g id="Group_1322" data-name="Group 1322" transform="translate(18 13)">
                                                        <path id="Path_1042" data-name="Path 1042" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1043" data-name="Path 1043" d="M11,6h7.585" transform="translate(-1.896 -1)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1044" data-name="Path 1044" d="M11,12h7.585" transform="translate(-1.896 -2)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1045" data-name="Path 1045" d="M12,18h6.742" transform="translate(-2.057 -3)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1046" data-name="Path 1046" d="M4,15.686a1.686,1.686,0,0,1,3.371,0c0,.5-.421.843-.843,1.264L4,19.057H7.371" transform="translate(-0.674 -2.377)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1047" data-name="Path 1047" d="M5.686,9.057V4L4,5.686" transform="translate(-0.67 -0.679)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                    </svg>

                                            </div>
                                            <div class="detail-body break-all">255315
                                                648255315</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex  xs12 sm6 md4>
                                   <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="20" viewBox="0 0 77 20">
                                                    <g id="Group_1323" data-name="Group 1323" transform="translate(-16.497 -13)">
                                                        <text id="Amount" transform="translate(44.497 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Amount</tspan></text>
                                                        <g id="Group_1324" data-name="Group 1324" transform="translate(16.497 13)">
                                                        <path id="Path_1048" data-name="Path 1048" d="M0,0H20V20H0Z" fill="none"/>
                                                        <rect id="Rectangle_83" data-name="Rectangle 83" width="11" height="9" rx="2" transform="translate(6.123 7.079)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <circle id="Ellipse_72" data-name="Ellipse 72" cx="1.5" cy="1.5" r="1.5" transform="translate(10.073 10.073)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1049" data-name="Path 1049" d="M14.6,7.313V6.656A1.656,1.656,0,0,0,12.939,5H4.656A1.656,1.656,0,0,0,3,6.656v4.969a1.656,1.656,0,0,0,1.656,1.656H6.313" transform="translate(-0.515 -0.815)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                            <div class="detail-body">12.000 KWD</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex xs12 sm6 md4>
                                   <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="20" viewBox="0 0 108 20">
                                                    <g id="Group_1325" data-name="Group 1325" transform="translate(11 -13)">
                                                        <text id="Reference_No" data-name="Reference No" transform="translate(17 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Reference No</tspan></text>
                                                        <g id="Group_1326" data-name="Group 1326" transform="translate(-11 13)">
                                                        <path id="Path_1050" data-name="Path 1050" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1051" data-name="Path 1051" d="M8.359,5H6.68A1.664,1.664,0,0,0,5,6.648v9.891a1.664,1.664,0,0,0,1.68,1.648h8.4a1.664,1.664,0,0,0,1.68-1.648V6.648A1.664,1.664,0,0,0,15.078,5H13.4" transform="translate(-0.879 -0.661)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <rect id="Rectangle_84" data-name="Rectangle 84" width="6" height="2" rx="1" transform="translate(7.111 3.037)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_57" data-name="Line 57" x2="0.008" transform="translate(7.5 10)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_58" data-name="Line 58" x2="2" transform="translate(11.135 10.11)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_59" data-name="Line 59" x2="0.008" transform="translate(7.5 13.333)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_60" data-name="Line 60" x2="2" transform="translate(11.135 13.143)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                    </svg>
                                            </div>
                                            <div class="detail-body">Demoknpay45f7g</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex> 
                           <!-- </v-layout> -->
                           <!-- <v-layout row wrap> -->
                               <v-flex xs12 sm6  md4>
                                   <v-card class="ma-10 rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="20" viewBox="0 0 64 20">
                                                    <g id="Group_1327" data-name="Group 1327" transform="translate(-16.497 -13)">
                                                        <text id="Status" transform="translate(44.497 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Status</tspan></text>
                                                        <g id="Group_1328" data-name="Group 1328" transform="translate(16.497 13)">
                                                        <path id="Path_1052" data-name="Path 1052" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1053" data-name="Path 1053" d="M9.068,4.091a1.428,1.428,0,0,1,2.775,0,1.428,1.428,0,0,0,2.132.883,1.429,1.429,0,0,1,1.963,1.963,1.428,1.428,0,0,0,.882,2.131,1.428,1.428,0,0,1,0,2.775,1.428,1.428,0,0,0-.883,2.132,1.429,1.429,0,0,1-1.963,1.963,1.428,1.428,0,0,0-2.131.882,1.428,1.428,0,0,1-2.775,0,1.428,1.428,0,0,0-2.132-.883,1.429,1.429,0,0,1-1.963-1.963,1.428,1.428,0,0,0-.882-2.131,1.428,1.428,0,0,1,0-2.775,1.428,1.428,0,0,0,.883-2.132A1.429,1.429,0,0,1,6.938,4.973a1.427,1.427,0,0,0,2.131-.882Z" transform="translate(-0.456 -0.456)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <circle id="Ellipse_73" data-name="Ellipse 73" cx="3" cy="3" r="3" transform="translate(7 7)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                            <div class="detail-body break-all">Success</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex xs12 sm6 md4>
                                   <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="20" viewBox="0 0 79 20">
                                                    <g id="Group_1329" data-name="Group 1329" transform="translate(-17 -13)">
                                                        <text id="Gateway" transform="translate(45 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Gateway</tspan></text>
                                                        <g id="Group_1330" data-name="Group 1330" transform="translate(17 13)">
                                                        <path id="Path_1054" data-name="Path 1054" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1055" data-name="Path 1055" d="M14.627,7.28V4.82A.819.819,0,0,0,13.809,4H5.635a1.64,1.64,0,0,0,0,3.28h9.809a.819.819,0,0,1,.817.82v2.46m0,3.28V16.3a.819.819,0,0,1-.817.82H5.635A1.638,1.638,0,0,1,4,15.481V5.64" transform="translate(-0.561 -0.561)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1056" data-name="Path 1056" d="M19.159,12v3.439H15.72a1.72,1.72,0,0,1,0-3.439h3.439" transform="translate(-2.457 -2.064)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="detail-body">Kpay</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex xs12 sm6 md4>
                                 <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                             <div class="detail-head">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="75" height="20" viewBox="0 0 75 20">
                                                    <g id="Group_1331" data-name="Group 1331" transform="translate(-16.497 -13)">
                                                        <text id="Track_ID" data-name="Track ID" transform="translate(44.497 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Track ID</tspan></text>
                                                        <g id="Group_1332" data-name="Group 1332" transform="translate(16.497 13)">
                                                        <path id="Path_1057" data-name="Path 1057" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1058" data-name="Path 1058" d="M5,18.028V4.67A1.672,1.672,0,0,1,6.673,3H15.04a1.672,1.672,0,0,1,1.673,1.67V18.028l-2.51-1.67-1.673,1.67-1.673-1.67-1.673,1.67L7.51,16.358,5,18.028" transform="translate(-0.857 -0.514)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1059" data-name="Path 1059" d="M13.972,12.972V11.314a1.657,1.657,0,0,0-1.657-1.657H9L10.657,8m0,3.314L9,9.657" transform="translate(-1.486 -1.321)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                    </svg>
                                            </div>
                                            <div class="detail-body">Demoknpay45f7g</div>
                                           
                                       </v-card-text>
                                   </v-card>
                               </v-flex> 
                           <!-- </v-layout>  -->
                            <!-- <v-layout row wrap> -->
                               <v-flex xs12 sm6 md4>
                                   <v-card class="ma-10 rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="20" viewBox="0 0 84 20">
                                                    <g id="Group_1333" data-name="Group 1333" transform="translate(-16 -11)">
                                                        <text id="Post_Date" data-name="Post Date" transform="translate(43 26)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Post Date</tspan></text>
                                                        <g id="Group_1254" data-name="Group 1254" transform="translate(16 11)">
                                                        <path id="Path_1033" data-name="Path 1033" d="M0,0H19V20H0Z" fill="none"/>
                                                        <rect id="Rectangle_10" data-name="Rectangle 10" width="13.153" height="12.667" rx="2" transform="translate(2.801 4.958)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_46" data-name="Line 46" y2="3.167" transform="translate(12.34 3.375)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_47" data-name="Line 47" y2="3.167" transform="translate(6.399 3.375)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_48" data-name="Line 48" x2="13.153" transform="translate(2.801 9.167)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <rect id="Rectangle_11" data-name="Rectangle 11" width="0.792" height="1.583" transform="translate(6.419 12.557)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                    </svg>
                                            </div>
                                            <div class="detail-body break-all">14-07-2021</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex xs12 sm6 md4>
                                   <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" viewBox="0 0 116 20" >
                                                    <g id="Group_1334" data-name="Group 1334" transform="translate(-16.497 -13)">
                                                        <text id="Transaction_no" data-name="Transaction no" transform="translate(44.497 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Transaction No</tspan></text>
                                                        <g id="Group_1335" data-name="Group 1335" transform="translate(16.497 13)">
                                                        <path id="Path_1057" data-name="Path 1057" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1058" data-name="Path 1058" d="M5,18.028V4.67A1.672,1.672,0,0,1,6.673,3H15.04a1.672,1.672,0,0,1,1.673,1.67V18.028l-2.51-1.67-1.673,1.67-1.673-1.67-1.673,1.67L7.51,16.358,5,18.028" transform="translate(-0.857 -0.514)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <path id="Path_1059" data-name="Path 1059" d="M13.972,12.972V11.314a1.657,1.657,0,0,0-1.657-1.657H9L10.657,8m0,3.314L9,9.657" transform="translate(-1.486 -1.321)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                    </svg>
                                            </div>
                                            <div class="detail-body">202119576504245</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex xs12 sm6 md4>
                                 <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                             <div class="detail-head">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="92" height="20" viewBox="0 0 92 20">
                                                    <g id="Group_1336" data-name="Group 1336" transform="translate(-17 -13)">
                                                        <text id="Auth_Code" data-name="Auth Code" transform="translate(45 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Auth Code</tspan></text>
                                                        <g id="Group_1337" data-name="Group 1337" transform="translate(17 13)">
                                                        <path id="Path_1060" data-name="Path 1060" d="M0,0H20V20H0Z" fill="none"/>
                                                        <circle id="Ellipse_74" data-name="Ellipse 74" cx="3.5" cy="3.5" r="3.5" transform="translate(3.166 8.882)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_61" data-name="Line 61" y1="6.222" x2="6.403" transform="translate(9.5 3.278)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_62" data-name="Line 62" x2="1" y2="1" transform="translate(15.5 4.5)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_63" data-name="Line 63" x2="1" y2="1" transform="translate(12.885 7.082)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                 </svg>
                                            </div>
                                            <div class="detail-body">000000</div>
                                           
                                       </v-card-text>
                                   </v-card>
                               </v-flex> 
                           <!-- </v-layout>  -->
                           <!-- <v-layout row wrap> -->
                               <v-flex xs12 sm6 md4>
                                   <v-card class="ma-10 rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="103" height="20" viewBox="0 0 103 20">
                                                    <g id="Group_1338" data-name="Group 1338" transform="translate(-16.497 -13)">
                                                        <text id="Reference_ID" data-name="Reference ID" transform="translate(44.497 28)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Reference ID</tspan></text>
                                                        <g id="Group_1339" data-name="Group 1339" transform="translate(16.497 13)">
                                                        <path id="Path_1050" data-name="Path 1050" d="M0,0H20V20H0Z" fill="none"/>
                                                        <path id="Path_1051" data-name="Path 1051" d="M8.359,5H6.68A1.664,1.664,0,0,0,5,6.648v9.891a1.664,1.664,0,0,0,1.68,1.648h8.4a1.664,1.664,0,0,0,1.68-1.648V6.648A1.664,1.664,0,0,0,15.078,5H13.4" transform="translate(-0.879 -0.661)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <rect id="Rectangle_84" data-name="Rectangle 84" width="6" height="2" rx="1" transform="translate(7.111 3.037)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_57" data-name="Line 57" x2="0.008" transform="translate(7.5 10)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_58" data-name="Line 58" x2="2" transform="translate(11.135 10.11)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_59" data-name="Line 59" x2="0.008" transform="translate(7.5 13.333)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        <line id="Line_60" data-name="Line 60" x2="2" transform="translate(11.135 13.143)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                        </g>
                                                    </g>
                                                    </svg>

                                            </div>
                                            <div class="detail-body break-all">119510000255</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                               <v-flex xs12 sm6 md4>
                                   <v-card class="ma-10  rounded-10 card-shadow ">
                                       <v-card-text>
                                            <div class="detail-head">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="21" viewBox="0 0 96 21">
                                            <g id="Group_1340" data-name="Group 1340" transform="translate(0 -13.84)">
                                                <text id="Payment_ID" data-name="Payment ID" transform="translate(28 28.84)" fill="#b1b9cc" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="-0.024em"><tspan x="0" y="0">Payment ID</tspan></text>
                                                <g id="Group_1341" data-name="Group 1341" transform="translate(0 14.84)">
                                                <path id="Path_1061" data-name="Path 1061" d="M0,0H20V20H0Z" fill="none"/>
                                                <rect id="Rectangle_85" data-name="Rectangle 85" width="15.679" height="11.679" rx="3" transform="translate(2.16 4.16)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                <line id="Line_64" data-name="Line 64" x2="15.679" transform="translate(2.16 8.032)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                <line id="Line_65" data-name="Line 65" x2="0.008" transform="translate(5.833 12.5)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                <line id="Line_66" data-name="Line 66" x2="2" transform="translate(9 12.953)" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                                </g>
                                            </g>
                                        </svg>

                                            </div>
                                            <div class="detail-body">100202119576512022</div>
                                       </v-card-text>
                                   </v-card>
                               </v-flex>
                           </v-layout> 
                        </v-card>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content>
                        <template v-slot:header>
                            <div class="accordion-header">

                                <svg id="Group_1259" data-name="Group 1259" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="change-in-mobile">
                                    <path id="Path_1039" data-name="Path 1039" d="M0,0H24V24H0Z" fill="none"/>
                                    <path id="Path_1040" data-name="Path 1040" d="M5,21V5A2,2,0,0,1,7,3H17a2,2,0,0,1,2,2V21l-3-2-2,2-2-2-2,2L8,19,5,21M9,7h6M9,11h6m-2,4h2" fill="none" stroke="#b1b9cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="ico"/>
                                </svg>
                                <div class="accordion-heading"> 
                                <span class="icon-text">Order Description</span>
                               
                               <span class=mr>255315648</span>
                               </div>
                            </div>
                        </template>
                        <v-card>
                            hello
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-layout>

            </div>
        <!--Third Section  -->

        <v-layout row wrap class="mt-x">
            <v-flex xs12 md6 lg6 >
                <v-btn dark  color="#302F37" class="attachment__btn mb-m">
                    <svg id="Group_1258" data-name="Group 1258" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="Path_1035" data-name="Path 1035" d="M0,0H24V24H0Z" fill="none"/>
                    <path id="Path_1036" data-name="Path 1036" d="M14,3V7a1,1,0,0,0,1,1h4" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Path_1037" data-name="Path 1037" d="M17,21H7a2,2,0,0,1-2-2V5A2,2,0,0,1,7,3h7l5,5V19A2,2,0,0,1,17,21Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <line id="Line_53" data-name="Line 53" y2="6" transform="translate(12 11)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path id="Path_1038" data-name="Path 1038" d="M9,14l3,3,3-3" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>
                    Download Attachment
                </v-btn>
            </v-flex>
            <v-flex xs12 md6 lg6 >
                <v-btn dark  color="#03A154" class="try-again__btn">
                    <svg id="Group_1346" data-name="Group 1346" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="Path_1063" data-name="Path 1063" d="M0,0H24V24H0Z" fill="none"/>
                        <path id="Path_1064" data-name="Path 1064" d="M19.95,11a8,8,0,1,0-.5,4m.5,5V15h-5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>
                    Try Again
                </v-btn>
            </v-flex>
        </v-layout>
       </v-flex>
   </v-layout>

  </div>
</template>

<script>
export default {
  name: 'Failed',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
