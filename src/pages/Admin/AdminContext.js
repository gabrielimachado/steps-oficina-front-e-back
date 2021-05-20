import React, { createContext, useCallback, useState } from 'react'

export const AdminProvider = createContext('taskboard')

export const AdminContext = ({ children }) => {
  const [search, setSearch] = useState('')
  const [subtaskArchived, setSubtaskArchived] = useState([])
  const [subtaskSelected, setSubtaskSelected] = useState([])
  const [taskId, setTaskId] = useState()

  const archiveSubtask = useCallback(() => {
    setSubtaskArchived([...subtaskArchived, taskId])
    setTaskId(null)
  }, [setTaskId, subtaskArchived, taskId])

  const selectSubtask = useCallback(
    (subtask) => {
      if (subtaskSelected.find((subtaskSelect) => subtaskSelect === subtask)) {
        setSubtaskSelected(subtaskSelected.filter((subtaskSelect) => subtaskSelect !== subtask))
      } else {
        setSubtaskSelected([...subtaskSelected, subtask])
      }
    },
    [subtaskSelected]
  )

  const subtaskHasSelected = useCallback(
    (subtask) => {
      return !!subtaskSelected.find((subtaskSelect) => subtaskSelect === subtask)
    },
    [subtaskSelected]
  )

  return (
    <AdminProvider.Provider
      value={{
        archiveSubtask,
        search,
        taskId,
        selectSubtask,
        setSearch,
        setTaskId,
        subtaskArchived,
        subtaskHasSelected,
        subtaskSelected,
      }}
    >
      {children}
    </AdminProvider.Provider>
  )
}
