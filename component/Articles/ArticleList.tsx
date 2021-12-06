import ArticleItem from './ArticleItem'
import SearchICon from '../../public/icons/search.svg'
import { ArticleModel } from '../../models/article.model'
import { useState } from 'react'

interface ListProps {
  articleList: Array<ArticleModel>
}

const ArticleList = ({ articleList }: ListProps) => {
  const [filteredList, setFilteredList] =
    useState<Array<ArticleModel>>(articleList)

  const filterList = (event: any) => {
    let tempFilteredList: Array<ArticleModel> = []
    const inputvalue = event.target.value
    tempFilteredList = inputvalue
      ? articleList.filter((article) =>
          article.name
            .toLowerCase()
            .trim()
            .includes(inputvalue.toLowerCase().trim())
        )
      : articleList
    setFilteredList(tempFilteredList)
  }

  return (
    <div className="pt-6 overflow-auto h-screen ">
      <div className="relative w-4/5">
        <SearchICon className="absolute right-0 top-2 right-2" />
        <input
          type="text"
          placeholder="Chercher un article"
          className="w-full pr-8 pl-4 py-2 rounded-lg border border-primary focus:border-2"
          onChange={filterList}
        />
      </div>
      <div className="m-auto">
        <div className="grid grid-flow-row auto-rows-fr 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {filteredList.map((article) => (
            <ArticleItem item={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleList
