import { Card } from "@/components/ui/card"
import { CalendarDays, UserCheck, DollarSign, CheckSquare } from "lucide-react"

// Sample data for the dashboard stats
const stats = [
  {
    title: "Today's Appointments",
    value: "23",
    change: "+5%",
    icon: <CalendarDays className="h-8 w-8" />,
    trend: "up",
  },
  {
    title: "Staff Present",
    value: "8/10",
    change: "80%",
    icon: <UserCheck className="h-8 w-8" />,
    trend: "neutral",
  },
  {
    title: "Today's Revenue",
    value: "₹24,500",
    change: "+12%",
    icon: <DollarSign className="h-8 w-8" />,
    trend: "up",
  },
  {
    title: "Completed Appointments",
    value: "18",
    change: "78%",
    icon: <CheckSquare className="h-8 w-8" />,
    trend: "up",
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="p-4 bg-gray-900 border-gray-800 hover:border-studio-gold/50 transition-all duration-300"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">{stat.title}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
              <p
                className={`mt-1 text-sm ${
                  stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-gray-500"
                }`}
              >
                {stat.change} from last week
              </p>
            </div>
            <div className="text-studio-gold">{stat.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}

