


const loadAllpost =async (query) =>{
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}


const handleSearch = () => {
    const searchValue = document.getElementById("search-box").value;
    loadAllpost(`?category=${searchValue}`)
    console.log(searchValue)
}
handleSearch();
loadAllpost('');