import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays } from "date-fns";

const today = new Date();
const startDate = subDays(today, 365);

const data = Array.from({ length: 365 }).map((_, i) => ({
  date: subDays(today, i).toISOString().split("T")[0],
  count: Math.floor(Math.random() * 5),
}));
const GithubHeatmap = () => {
  return (
    <div className="bg-transparent p-6 rounded-xl  flex flex-col items-center justify-center  mx-20">
      <CalendarHeatmap
        startDate={startDate}
        endDate={today}
        values={data}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  )
}

export default GithubHeatmap