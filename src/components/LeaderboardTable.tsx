type LeaderboardRow = {
  name: string
  gain: string
}

const LeaderboardTable = ({ rows }: { rows: LeaderboardRow[] }) => {
  return (
    <div>
      <h3 className="xl:text-left font-semibold mb-3 text-center">ALIQUAM LOREM ANT</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-red  border-b">
            <th className="py-2 text-start w-[400px]">NAME</th>
            <th className="py-2 text-start">GAIN</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b e">
              <td className="py-2">{row.name}</td>
              <td className="py-2 font-bold">{row.gain}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-[#999999] mt-6">Nam quam nunc, blandit vel, luctus pulvinar</p>
    </div>
  )
}
export default LeaderboardTable
