import React, { memo, useContext, useMemo } from 'react'

import { Avatar, Box, Checkbox } from '@material-ui/core'

import { AvatarGroup } from '@material-ui/lab'

import { Check, Message, Send } from '@material-ui/icons'

// Não foi utilizado classe pois com o random interno acabaria atribuindo a mesma cor para todos os avatares pertencentes a classe
import { getColor } from 'random-material-color'

import { formatDate } from '../../helpers/dates'
import { getInitials } from '../../helpers/strings'

import { useHover } from '../../hooks/useHover'

import { AdminProvider } from './AdminContext'
import { grey } from '@material-ui/core/colors'

export const AdminLayoutTaskboardItem = memo(({ id, date, name, subject, owner, users, ...props }) => {
  const { selectSubtask, subtaskHasSelected, subtaskSelected } = useContext(AdminProvider)

  const [ref, hovered] = useHover()

  const styledAvatar = useMemo(() => {
    if (subtaskHasSelected(id)) {
      return {
        color: 'white',
        backgroundColor: getColor({ shades: ['400'] }),
      }
    }

    if (!subtaskHasSelected(id) && subtaskSelected.length) {
      return {
        backgroundColor: grey[200],
      }
    }

    return {}
  }, [id, subtaskHasSelected, subtaskSelected])

  const avatarRender = useMemo(() => {
    if (hovered || subtaskSelected.length) {
      return (
        <Checkbox style={styledAvatar} icon={<Check />} checkedIcon={<Check />} onClick={() => selectSubtask(id)} />
      )
    }

    return (
      <Avatar alt={name} style={{ color: 'white', backgroundColor: getColor({ shades: ['400'] }) }}>
        {owner}
      </Avatar>
    )
  }, [hovered, id, name, owner, selectSubtask, styledAvatar, subtaskSelected])

  return (
    <Box display="flex" alignItems="center">
      <Box ref={ref} marginRight={2}>
        {avatarRender}
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <Box display="flex" marginBottom={1}>
          <Box fontWeight="fontWeightBold">{name}</Box>
        </Box>

        <Box display="flex">
          <Box marginRight={1}>
            <Message />
          </Box>

          <Box fontWeight="fontWeightLight">{subject}</Box>
        </Box>

        <Box display="flex">
          <Box marginRight={1}>
            <Send />
          </Box>

          <Box fontWeight="fontWeightLight">Tarefa 1</Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Box marginBottom={2}>{formatDate(date)}</Box>

        <AvatarGroup max={4}>
          {users.map((user) => (
            <Avatar alt={user} style={{ color: 'white', backgroundColor: getColor({ shades: ['400'] }) }}>
              {getInitials(user)}
            </Avatar>
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  )
})
