import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Image from "./image"

interface IProps {
  member: Team
}

interface Team {
  title: string
  image: string
  description: string
}

const TeamMember = ({ member, ...props }: IProps) => {
  return (
    <Card>
      <CardContent style={{ textAlign: "start" }}>
        <div style={{ width: 80, padding: 10 }}>
          <Image alt={member.title} filename={member.image} />
        </div>
        <Typography variant="h6" color="inherit">
          {member.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {member.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default TeamMember
