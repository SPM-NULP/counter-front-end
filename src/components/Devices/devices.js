import {
  Box,
  Container,
  Stack,
  Typography,
  Card,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { CompanyCard } from '../../sections/companies/company-card';
import {Error} from '../ErrorPage/error'

import {PlusIcon, ArrowLeftIcon} from '@heroicons/react/24/solid';


const buttonsError = [
  {
    btn_text: 'Повернутись на головну',
    icon: <ArrowLeftIcon />,
    href: '/counter-front-end/overview'
  },
  {
    btn_text: 'Додати пристрій',
    icon: <PlusIcon />,
    href: '/counter-front-end/overview'
  }
]

export const Devices = ({devices}) => {
  return (
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Пристрої
              </Typography>
            </Stack>
          </Stack>
          {devices === undefined || devices.length === 0 ? 
            <Card>
              <Error
                MainMessage="Схоже у вас ще немає активних пристроїв"
                SubMessage="Ви можете додати новий пристрій на цій сторінці"
                buttons={buttonsError}
              ></Error>
            </Card>
            :
            <Grid
              container
              spacing={3}
            >
              {devices.map((device) => (
                <Grid
                  xs={12}
                  md={6}
                  lg={12}
                  key={device.serialNumber}
                >
                  <CompanyCard device={device} />
                </Grid>
              ))}
            </Grid>
          }
        </Stack>
      </Container>
    </Box>
  </>
  )
};
