const Wifi = () => {
  const wifiNames = [
    "Mard-Fi",
    "GeekyIsGay",
    "HomoMars",
    "Hidden Network",
    "Heisenberg",
    "HOME-8A11S",
    "HOME-80085",
    "Meow-Fi",
    "Nyaa-twork",
    "IMSTUCK",
    "INTHISNETWORK",
    "Herb's Garden",
    "FoxDen",
    "RiverRiver",
    "Tofuuuuuuuu",
  ]

  const random = Math.floor(Math.random() * wifiNames.length)

  return (
    <div className="flex items-center gap-4 pl-5">
      <p className="text-[#f9e2af]"> </p>
      <p className="text-[#f9e2af]">{wifiNames[random]}</p>
    </div>
  )
}

export default Wifi
