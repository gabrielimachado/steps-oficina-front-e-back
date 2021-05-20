import React, { useContext, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@material-ui/core'
import { TreeItem, TreeView } from '@material-ui/lab'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useQueryFavorites } from '../../api/queries/favorites'
import { AdminProvider } from './AdminContext'
import { stylesAdminLayoutFavorites } from './styles'



export const AdminLayoutFavorites = () => {
  const { subtaskArchived: archivedItems, setTaskId } = useContext(AdminProvider)
  const { t } = useTranslation()

  const classes = stylesAdminLayoutFavorites()

  const { data: favorites = [], refetch } = useQueryFavorites({ archivedItems }, { enabled: false })

  // TODO: quando parametro é modificado refetch da querie não é realizado.
  useEffect(() => {
    refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps

    
    
  }, [archivedItems])


  const countFavorites = useMemo(() => {
    if (favorites.length) {
      return favorites.reduce((acc, next, idx) => {
        if (idx === 1) {
          return acc.subMenus.length + next.subMenus.length
        }

        return acc + next.subMenus.length
      })
    }

    return 0
  }, [favorites])





  return (
    <Box>
      <Box marginLeft={5} marginBottom={2} display="flex" justifyContent="space-between">
        <Box fontWeight="fontWeightLight" fontSize={18}>
          {t('favorites')}
        </Box>

        <Box fontWeight="fontWeightLight">{countFavorites}</Box>
      </Box>

      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {favorites.map((favorite) => (
          <TreeItem
            nodeId={favorite.id}
            label={
              <Box display="flex" justifyContent="space-between" paddingY={1} marginLeft={5}>
                <Box fontWeight="fontWeightLight">{favorite.name}</Box>
                <Box fontWeight="fontWeightLight">{(favorite.subMenus || []).length}</Box>
              </Box>
            }
            children={favorite.subMenus.map((subMenu) => (
              <TreeItem
                nodeId={subMenu.id}
                label={
                  <Box display="flex" justifyContent="space-between" paddingY={1} marginLeft={5}>
                    <Box fontWeight="fontWeightLight">{subMenu.name}</Box>

                    <Box fontWeight="fontWeightLight">{(favorite.subMenus || []).length}</Box>
                  </Box>
                }
                onClick={() => setTaskId(subMenu.id)}
              />
            ))}
          />
        ))}
      </TreeView>
    

    </Box>
  )
}
