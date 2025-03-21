import type React from "react"
interface AdminHeaderProps {
  title: string
  subtitle?: string
  actions?: React.ReactNode
}

export default function AdminHeader({ title, subtitle, actions }: AdminHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-white font-playfair">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
      </div>
      {actions && <div className="mt-4 sm:mt-0">{actions}</div>}
    </div>
  )
}

