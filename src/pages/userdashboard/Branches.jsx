import React from 'react'
import Nav from '../../components/Nav'

const Branches = () => {

  const Branches = [
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    { branch: "Oyo State Branch", location: "Hipster ipsum tattooed brunch I'm baby. Denim fashion heard forage tacos cornhole. Semiotics palo mukbang hoodie level. Bodega bird yolo level tote. Truffaut pack ennui." },
    
  ];
  return (
    <div>
      <Nav />
      <div className="px-6">
        <div >
          <h2 className="font-mont text-[22px]">Branches Locations</h2>
        </div>


        <div className="mt-2 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Branches.map((branch, index) => (
            <div className="border border-[#F9E6DB] p-3">
            <h1 className="text-[28px] text-orange">{branch.branch}</h1>
            <p className='text-[14px]'>{branch.location}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Branches
