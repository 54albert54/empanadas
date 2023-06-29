export const Repertorio =({info})=>{
  return(
    <section className="repertorio_container">
    <div className="repertorio_info">
      <h2>{info.title}</h2>
      <p>{info.data}</p>
      <img className="repertorio_img" src={info.img} alt={info.title} />
      <div className="repertorio_links"> 
      <a href={info.link} target="_blank" rel="noopener noreferrer">click ala web</a>
      <a href={info.linkRepo} target="_blank" rel="noopener noreferrer">click al Repositorio</a>
      </div>
      
    </div>
    
  </section>
  )
  };