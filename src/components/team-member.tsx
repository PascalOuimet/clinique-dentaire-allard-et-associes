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
  const isImgVisible = member.image.length > 0 ? "visible" : "hidden";

  return (
    <Card>
      <CardContent style={{ textAlign: "center", backgroundColor: "#dfdfdf" }}>
        <div style={{ width: 120, padding: 10, visibility: isImgVisible }} className="staff">
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
