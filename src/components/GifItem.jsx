
export function GifItem({title, url}) {
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <div>
          <p>{title}</p>

        </div>
    </div>
  )
}