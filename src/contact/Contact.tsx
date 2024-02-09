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
        </div>
        <div className="">
          <p className="">NIFS Sam Popham's Arboretum</p>
          <div className="">
            <p>Kandalama Road</p>
            <p>Damubulla</p>
            <p>Mathale</p>
            <p>Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact