import "./topbar.scss"
import { LocalPhone,Mail,WhatsApp } from "@mui/icons-material"
import useKey from "../../hooks/useKey";

export default function Topbar({menuOpen, setMenuOpen}) {

    useKey("KeyM",()=>{
        setMenuOpen(!menuOpen)
        console.log("m");
    })
    return (
        <div className={"topbar shadow " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">
                        <svg id="logo" width="406" height="52" viewBox="0 0 406 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1382 38.2674L10.934 24.3105H5.49749V38.2674H1V4.13418H12.1202C14.7231 4.13418 16.9142 4.57493 18.6934 5.45642C20.5056 6.33791 21.8565 7.52955 22.7461 9.03134C23.6357 10.5331 24.0805 12.2471 24.0805 14.1734C24.0805 16.524 23.3886 18.5971 22.0047 20.3928C20.6539 22.1884 18.611 23.38 15.8763 23.9677L24.5253 38.2674H19.1382ZM5.49749 20.7356H12.1202C14.5584 20.7356 16.387 20.1479 17.6061 18.9726C18.8252 17.7646 19.4348 16.1649 19.4348 14.1734C19.4348 12.1492 18.8252 10.5821 17.6061 9.47209C16.42 8.36206 14.5913 7.80705 12.1202 7.80705H5.49749V20.7356Z" stroke="#eaebea" strokeWidth="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M55.7803 23.8208C55.7803 24.6696 55.7309 25.5674 55.632 26.5142H33.9848C34.1495 29.1587 35.0556 31.2318 36.703 32.7336C38.3834 34.2027 40.4098 34.9373 42.7821 34.9373C44.726 34.9373 46.3405 34.4966 47.6255 33.6151C48.9435 32.7009 49.866 31.493 50.3932 29.9912H55.2366C54.5118 32.5704 53.062 34.6761 50.8874 36.3085C48.7128 37.9083 46.011 38.7081 42.7821 38.7081C40.2121 38.7081 37.9057 38.1368 35.8629 36.9941C33.853 35.8515 32.2715 34.2354 31.1183 32.1459C29.9651 30.0238 29.3885 27.5753 29.3885 24.8002C29.3885 22.0251 29.9486 19.5929 31.0688 17.5034C32.1891 15.414 33.7541 13.8142 35.764 12.7042C37.8068 11.5615 40.1462 10.9902 42.7821 10.9902C45.3521 10.9902 47.6255 11.5452 49.6024 12.6552C51.5793 13.7653 53.095 15.2997 54.1493 17.2586C55.2366 19.1848 55.7803 21.3722 55.7803 23.8208ZM51.1345 22.8903C51.1345 21.1926 50.7556 19.7398 49.9978 18.5318C49.24 17.2912 48.2021 16.3608 46.8842 15.7405C45.5992 15.0875 44.1659 14.761 42.5844 14.761C40.3109 14.761 38.367 15.4793 36.7525 16.9158C35.1709 18.3523 34.2648 20.3438 34.0342 22.8903H51.1345Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M86.4283 23.8208C86.4283 24.6696 86.3789 25.5674 86.28 26.5142H64.6328C64.7975 29.1587 65.7036 31.2318 67.3511 32.7336C69.0314 34.2027 71.0578 34.9373 73.4301 34.9373C75.374 34.9373 76.9885 34.4966 78.2735 33.6151C79.5915 32.7009 80.514 31.493 81.0412 29.9912H85.8847C85.1598 32.5704 83.71 34.6761 81.5354 36.3085C79.3608 37.9083 76.659 38.7081 73.4301 38.7081C70.8601 38.7081 68.5537 38.1368 66.5109 36.9941C64.501 35.8515 62.9195 34.2354 61.7663 32.1459C60.6131 30.0238 60.0365 27.5753 60.0365 24.8002C60.0365 22.0251 60.5966 19.5929 61.7168 17.5034C62.8371 15.414 64.4022 13.8142 66.412 12.7042C68.4548 11.5615 70.7942 10.9902 73.4301 10.9902C76.0001 10.9902 78.2735 11.5452 80.2504 12.6552C82.2274 13.7653 83.743 15.2997 84.7973 17.2586C85.8847 19.1848 86.4283 21.3722 86.4283 23.8208ZM81.7826 22.8903C81.7826 21.1926 81.4036 19.7398 80.6458 18.5318C79.888 17.2912 78.8501 16.3608 77.5322 15.7405C76.2472 15.0875 74.8139 14.761 73.2324 14.761C70.9589 14.761 69.015 15.4793 67.4005 16.9158C65.8189 18.3523 64.9129 20.3438 64.6822 22.8903H81.7826Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M90.6845 24.7512C90.6845 22.0088 91.2446 19.6092 92.3648 17.5524C93.4851 15.4629 95.0172 13.8469 96.9612 12.7042C98.9381 11.5615 101.146 10.9902 103.584 10.9902C105.693 10.9902 107.653 11.4799 109.465 12.4594C111.277 13.4061 112.661 14.6631 113.617 16.2302V2.02841H118.164V38.2674H113.617V33.2233C112.727 34.823 111.409 36.1453 109.663 37.19C107.917 38.2021 105.874 38.7081 103.534 38.7081C101.129 38.7081 98.9381 38.1205 96.9612 36.9452C95.0172 35.7698 93.4851 34.1211 92.3648 31.999C91.2446 29.8769 90.6845 27.461 90.6845 24.7512ZM113.617 24.8002C113.617 22.776 113.205 21.0131 112.381 19.5113C111.557 18.0095 110.437 16.8668 109.02 16.0833C107.637 15.2671 106.104 14.859 104.424 14.859C102.744 14.859 101.212 15.2507 99.8277 16.0343C98.4439 16.8178 97.3401 17.9605 96.5164 19.4623C95.6926 20.9641 95.2808 22.7271 95.2808 24.7512C95.2808 26.808 95.6926 28.6037 96.5164 30.1381C97.3401 31.6399 98.4439 32.7989 99.8277 33.6151C101.212 34.3986 102.744 34.7904 104.424 34.7904C106.104 34.7904 107.637 34.3986 109.02 33.6151C110.437 32.7989 111.557 31.6399 112.381 30.1381C113.205 28.6037 113.617 26.8244 113.617 24.8002Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M139.207 10.9412C141.25 10.9412 143.095 11.382 144.742 12.2635C146.39 13.1123 147.675 14.4019 148.597 16.1322C149.553 17.8626 150.031 19.9683 150.031 22.4496V38.2674H145.583V23.0862C145.583 20.4091 144.907 18.3686 143.556 16.9647C142.205 15.5282 140.36 14.81 138.021 14.81C135.649 14.81 133.754 15.5446 132.337 17.0137C130.953 18.4829 130.261 20.6213 130.261 23.429V38.2674H125.764V2.02841H130.261V15.2507C131.151 13.8795 132.37 12.8185 133.919 12.0676C135.5 11.3167 137.263 10.9412 139.207 10.9412Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M155.697 24.7512C155.697 22.0088 156.257 19.6092 157.377 17.5524C158.497 15.4629 160.03 13.8469 161.974 12.7042C163.95 11.5615 166.142 10.9902 168.547 10.9902C170.919 10.9902 172.978 11.4962 174.725 12.5083C176.471 13.5204 177.772 14.7937 178.629 16.3281V11.431H183.176V38.2674H178.629V33.2723C177.739 34.8394 176.405 36.1453 174.626 37.19C172.88 38.2021 170.837 38.7081 168.497 38.7081C166.092 38.7081 163.918 38.1205 161.974 36.9452C160.03 35.7698 158.497 34.1211 157.377 31.999C156.257 29.8769 155.697 27.461 155.697 24.7512ZM178.629 24.8002C178.629 22.776 178.217 21.0131 177.394 19.5113C176.57 18.0095 175.45 16.8668 174.033 16.0833C172.649 15.2671 171.117 14.859 169.436 14.859C167.756 14.859 166.224 15.2507 164.84 16.0343C163.456 16.8178 162.352 17.9605 161.529 19.4623C160.705 20.9641 160.293 22.7271 160.293 24.7512C160.293 26.808 160.705 28.6037 161.529 30.1381C162.352 31.6399 163.456 32.7989 164.84 33.6151C166.224 34.3986 167.756 34.7904 169.436 34.7904C171.117 34.7904 172.649 34.3986 174.033 33.6151C175.45 32.7989 176.57 31.6399 177.394 30.1381C178.217 28.6037 178.629 26.8244 178.629 24.8002Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M223.346 10.9412C225.455 10.9412 227.333 11.382 228.98 12.2635C230.628 13.1123 231.929 14.4019 232.885 16.1322C233.84 17.8626 234.318 19.9683 234.318 22.4496V38.2674H229.87V23.0862C229.87 20.4091 229.194 18.3686 227.844 16.9647C226.526 15.5282 224.73 14.81 222.456 14.81C220.117 14.81 218.255 15.5609 216.872 17.0627C215.488 18.5318 214.796 20.6703 214.796 23.478V38.2674H210.348V23.0862C210.348 20.4091 209.672 18.3686 208.321 16.9647C207.004 15.5282 205.208 14.81 202.934 14.81C200.595 14.81 198.733 15.5609 197.35 17.0627C195.966 18.5318 195.274 20.6703 195.274 23.478V38.2674H190.776V11.431H195.274V15.2997C196.163 13.8959 197.35 12.8185 198.832 12.0676C200.348 11.3167 202.012 10.9412 203.824 10.9412C206.097 10.9412 208.107 11.4473 209.854 12.4594C211.6 13.4714 212.901 14.9569 213.758 16.9158C214.516 15.0222 215.768 13.5531 217.514 12.5083C219.26 11.4636 221.204 10.9412 223.346 10.9412Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M277.903 14.1244C277.903 16.9647 276.914 19.3317 274.937 21.2253C272.993 23.0862 270.012 24.0167 265.992 24.0167H259.369V38.2674H254.872V4.13418H265.992C269.88 4.13418 272.829 5.06464 274.839 6.92556C276.881 8.78649 277.903 11.1861 277.903 14.1244ZM265.992 20.3438C268.496 20.3438 270.341 19.8051 271.527 18.7277C272.713 17.6503 273.306 16.1159 273.306 14.1244C273.306 9.91283 270.868 7.80705 265.992 7.80705H259.369V20.3438H265.992Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M307.512 11.431V38.2674H303.015V34.3007C302.158 35.6719 300.955 36.7493 299.407 37.5328C297.891 38.2837 296.211 38.6592 294.366 38.6592C292.257 38.6592 290.362 38.2347 288.682 37.3859C287.002 36.5044 285.667 35.1985 284.679 33.4682C283.723 31.7378 283.245 29.6321 283.245 27.1508V11.431H287.694V26.5632C287.694 29.2076 288.369 31.2481 289.72 32.6846C291.071 34.0885 292.916 34.7904 295.255 34.7904C297.66 34.7904 299.555 34.0558 300.939 32.5867C302.323 31.1175 303.015 28.9791 303.015 26.1714V11.431H307.512Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M317.528 7.07248C316.671 7.07248 315.946 6.77865 315.353 6.19099C314.793 5.60333 314.513 4.88508 314.513 4.03624C314.513 3.1874 314.793 2.46915 315.353 1.88149C315.946 1.29383 316.671 1 317.528 1C318.384 1 319.093 1.29383 319.653 1.88149C320.246 2.46915 320.542 3.1874 320.542 4.03624C320.542 4.88508 320.246 5.60333 319.653 6.19099C319.093 6.77865 318.384 7.07248 317.528 7.07248ZM319.752 44.095C319.752 46.4783 319.142 48.2249 317.923 49.335C316.704 50.445 314.925 51 312.585 51H309.966V47.2292H311.844C313.096 47.2292 313.969 46.9843 314.463 46.4946C314.991 46.0049 315.254 45.1724 315.254 43.9971V11.431H319.752V44.095Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M325.685 24.7512C325.685 22.0088 326.245 19.6092 327.365 17.5524C328.485 15.4629 330.017 13.8469 331.961 12.7042C333.938 11.5615 336.129 10.9902 338.535 10.9902C340.907 10.9902 342.966 11.4962 344.713 12.5083C346.459 13.5204 347.76 14.7937 348.617 16.3281V11.431H353.164V38.2674H348.617V33.2723C347.727 34.8394 346.393 36.1453 344.614 37.19C342.867 38.2021 340.825 38.7081 338.485 38.7081C336.08 38.7081 333.905 38.1205 331.961 36.9452C330.017 35.7698 328.485 34.1211 327.365 31.999C326.245 29.8769 325.685 27.461 325.685 24.7512ZM348.617 24.8002C348.617 22.776 348.205 21.0131 347.381 19.5113C346.558 18.0095 345.437 16.8668 344.021 16.0833C342.637 15.2671 341.105 14.859 339.424 14.859C337.744 14.859 336.212 15.2507 334.828 16.0343C333.444 16.8178 332.34 17.9605 331.517 19.4623C330.693 20.9641 330.281 22.7271 330.281 24.7512C330.281 26.808 330.693 28.6037 331.517 30.1381C332.34 31.6399 333.444 32.7989 334.828 33.6151C336.212 34.3986 337.744 34.7904 339.424 34.7904C341.105 34.7904 342.637 34.3986 344.021 33.6151C345.437 32.7989 346.558 31.6399 347.381 30.1381C348.205 28.6037 348.617 26.8244 348.617 24.8002Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M365.262 15.7894C366.052 14.255 367.173 13.0633 368.622 12.2145C370.105 11.3657 371.901 10.9412 374.01 10.9412V15.5446H372.823C367.782 15.5446 365.262 18.2543 365.262 23.6738V38.2674H360.764V11.431H365.262V15.7894Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                            <path d="M377.521 24.7512C377.521 22.0088 378.081 19.6092 379.201 17.5524C380.321 15.4629 381.854 13.8469 383.798 12.7042C385.774 11.5615 387.966 10.9902 390.371 10.9902C392.743 10.9902 394.802 11.4962 396.549 12.5083C398.295 13.5204 399.596 14.7937 400.453 16.3281V11.431H405V38.2674H400.453V33.2723C399.563 34.8394 398.229 36.1453 396.45 37.19C394.704 38.2021 392.661 38.7081 390.321 38.7081C387.916 38.7081 385.742 38.1205 383.798 36.9452C381.854 35.7698 380.321 34.1211 379.201 31.999C378.081 29.8769 377.521 27.461 377.521 24.7512ZM400.453 24.8002C400.453 22.776 400.041 21.0131 399.218 19.5113C398.394 18.0095 397.274 16.8668 395.857 16.0833C394.473 15.2671 392.941 14.859 391.26 14.859C389.58 14.859 388.048 15.2507 386.664 16.0343C385.28 16.8178 384.176 17.9605 383.353 19.4623C382.529 20.9641 382.117 22.7271 382.117 24.7512C382.117 26.808 382.529 28.6037 383.353 30.1381C384.176 31.6399 385.28 32.7989 386.664 33.6151C388.048 34.3986 389.58 34.7904 391.26 34.7904C392.941 34.7904 394.473 34.3986 395.857 33.6151C397.274 32.7989 398.394 31.6399 399.218 30.1381C400.041 28.6037 400.453 26.8244 400.453 24.8002Z" stroke="#eaebea" stroke-width="2" mask="url(#path-1-outside-1_2:2)" />
                        </svg>
                    </a>
                    <div className="itemcontainer">
                        
                        <a href="tel:+917016664182">
                        <WhatsApp title className="icon"/>
                        <LocalPhone className="icon"/>
                        <span>+91 7016 664 182</span>
                        </a>
                    </div>
                    <div className="itemcontainer">
                        <a href="mailto:pujara.reedham@gmail.com">
                        <Mail className="icon"/>
                        <span>reedhamjpujara2092001@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick ={()=>setMenuOpen(!menuOpen)} title="Menu (M)">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
