import { Controller, UseFormReturn } from 'react-hook-form'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import FormCheckbox from '@/components/Dashboard/RegistrationForms/FormComponents/FormCheckbox'
import FormSelect from '@/components/Dashboard/RegistrationForms/FormComponents/FormSelect'
import FormTextField from '@/components/Dashboard/RegistrationForms/FormComponents/FormTextField'
import { base } from '@/styles/theme'
import { deerhacksReachOptions, OTHER_SPECIFY } from '@/types/Application'
import { DeerhacksZodForm } from '@/types/Zod'

type Props = {
  form: UseFormReturn<DeerhacksZodForm>
  onNext: (data: DeerhacksZodForm) => void
}

const DeerhacksForm = (props: Props) => {
  const { form, onNext } = props

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = form

  return (
    <form noValidate onSubmit={handleSubmit(onNext)}>
      <Grid container direction="column" gap="2.5rem">
        <Grid container direction="column" gap="1.5rem">
          <Typography variant="h2">Reach</Typography>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            👀 Which team gets the bonus. jk we don't get paid 😩
          </Typography>
          <Box
            component="div"
            display="flex"
            width="100%"
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap="1rem"
          >
            <Controller
              name="deerhacks_reach"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <FormSelect
                  label="Where Did You First Hear About DeerHacks?"
                  options={deerhacksReachOptions}
                  errors={errors}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
            {watch('deerhacks_reach') == OTHER_SPECIFY && (
              <Controller
                name="deerhacks_reach_other"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <FormTextField label="Other" errors={errors} inputRef={ref} {...field} />
                )}
              />
            )}
          </Box>
        </Grid>

        <Grid container direction="column" gap="1.5rem">
          <Typography variant="h2">Meals</Typography>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            🍔 To budget between prizes and grub
          </Typography>
          <Box component="div">
            <Controller
              name="day1_dinner"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <FormCheckbox
                  label="Friday Dinner (Feb 14)"
                  errors={errors}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
            <Controller
              name="day2_breakfast"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <FormCheckbox
                  label="Saturday Breakfast (Feb 15)"
                  errors={errors}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
            <Controller
              name="day2_lunch"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <FormCheckbox
                  label="Saturday Lunch (Feb 15)"
                  errors={errors}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
            <Controller
              name="day2_dinner"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <FormCheckbox
                  label="Saturday Dinner (Feb 15)"
                  errors={errors}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
            <Controller
              name="day3_breakfast"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <FormCheckbox
                  label="Sunday Breakfast (Feb 15)"
                  errors={errors}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
          </Box>
        </Grid>

        <Button type="submit">Next</Button>
      </Grid>
    </form>
  )
}

export default DeerhacksForm
