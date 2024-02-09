import IonIcon from "@reacticons/ionicons"

const Contact = () => {
  return (
    <div className="container mx-auto px-10">
      <h1 className="">Contact</h1>
      <p className="">Office Location</p>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="">
          <p className="">Headquarters</p>
          <div className="">
            <p>National Institute of Fundamental Studies</p>
            <p>Hanthana Road</p>
            <p>Kandy</p>
            <p>Sri Lanka</p>
            <div className="flex mt-4">
              <div className="pt-4">
                 <span><IonIcon name="call" size="large"/></span>              
              </div>
              <div className="pl-4">
                <p className="">[+94] 81 22 32 106</p>
                <p className="">[+94] 81 22 32 107</p>
                <p className="">[+94] 81 22 32 131</p>
              </div>
              </div>
              <div className="flex mt-4">
                <div className="">
                  <IonIcon name="mail" size="large"/>
                </div>
                <div className="pl-4">
                  <p className="">pophamard@nifs.ac.lk</p>
                </div>
              </div>            
          </div>
        </div>
        <div className="">
          <p className="">Colombo Office</p>
          <div className="">
            <p>National Institute of Fundamental Studies</p>
            <p>No,380/71,72, Bauddhaloka Mawatha</p>
            <p>Colombo 07</p>
            <p>Sri Lanka</p>
          </div>
          <div className="flex mt-4">
              <div className="">
                 <span><IonIcon name="call" size="large"/></span>              
              </div>
              <div className="pl-4">
                <p className="">[+94] 11 26 97 538</p>
              </div>
          </div>
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="mail" size="large"/>
            </div>
            <div className="px-4">
              <p className="">pophamard@nifs.ac.lk</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="">NIFS Sam Popham's Arboretum</p>
          <div className="">
            <p>Kandalama Road</p>
            <p>Damubulla</p>
            <p>Mathale</p>
            <p>Sri Lanka</p>
          </div>
          <div className="flex mt-4">
              <div className="">
                 <span><IonIcon name="call" size="large"/></span>              
              </div>
              <div className="pl-4">
                <p className="">[+94] 66 20 57 960</p>
              </div>
          </div>
          <div className="flex">
            <div className="">
              <IonIcon name="mail" size="large"/>
            </div>
            <div className="pl-4">
              <p className="">pophamard@nifs.ac.lk</p>
            </div>
          </div>
        </div>
      </div>

      <p className="">Enquiries</p>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="">
          <p className="">General enquiries</p>
          <p className="">info@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="">Media enquiries</p>
          <p className="">media@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="">Research enquiries</p>
          <p className="">research@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="">Website enquiries</p>
          <p className="">web@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="">Right to Information</p>
          <p className="">rti@nifs.ac.lk</p>
        </div>
      </div>
    </div>
  )
}

export default Contact