import { useQuery } from 'react-query'

// Tive problemas de CORS ao consumir dados da API
import db from '../db.json'

export const queryTaskboard = ({ taskId }) => {
  return new Promise((resolve) => {
    if (taskId) {
      setTimeout(() => resolve(db.taskboard.filter((task) => task.id === taskId)), 1000)
    } else {
      setTimeout(() => resolve([]), 1000)
    }
  })
}

export const useQueryTaskboard = (queryParams, config) => {
  return useQuery('taskboard', () => queryTaskboard(queryParams), config)
}

useQueryTaskboard.queryKey = 'taskboar'
