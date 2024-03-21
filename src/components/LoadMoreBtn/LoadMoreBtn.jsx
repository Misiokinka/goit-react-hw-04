import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = (props) => {
    const { handleLoadMore } = props
    return (
        <div>  <button className={css.btnLoadMore} onClick={handleLoadMore}>Load More</button></div>
    )
}

export default LoadMoreBtn