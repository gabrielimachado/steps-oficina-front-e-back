import { useQuery } from 'react-query'

// Tive problemas de CORS ao consumir dados da API
import db from '../db.json'

export const queryFavorites = ({ archivedItems = [] }) => {
  return new Promise((resolve) => {
    if (archivedItems.length) {
      setTimeout(
        () =>
          resolve(
            db.favorites.map((favorite) => {
              return {
                ...favorite,
                subMenus: favorite.subMenus.filter((subItem) => {
                  const item = archivedItems.find((archivedItem) => archivedItem === subItem.id)

                  return !item
                }),
              }
            })
          ),
        1000
      )
    } else {
      setTimeout(() => resolve(db.favorites), 1000)
    }
  })
}

export const useQueryFavorites = (queryParams, config) =>
  useQuery('favorites', () => queryFavorites(queryParams), config)
useQueryFavorites.queryKey = 'favorites'
