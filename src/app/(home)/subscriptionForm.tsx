'use client'

import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Digite um email válido'),
})

type SubscriptionFormData = z.infer<typeof subscriptionFormSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionFormSchema),
  })

  function onSubcribe(data: SubscriptionFormData) {
    console.log('debug -> ', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubcribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              {...register('name')}
              type="text"
              placeholder="Nome completo"
            />
          </InputRoot>

          {errors.name && (
            <span className="text-red-400 text-xs font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              {...register('email')}
              type="text"
              placeholder="E-mail"
            />
          </InputRoot>

          {errors.email && (
            <span className="text-red-400 text-xs font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  )
}
