import React from "react"
import Image from "./image"

interface TeamMemberProps {
  member: TeamMemberData
}

interface TeamMemberData {
  title: string
  image: string
  description: string
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const isPlaceholder = member.image.includes("tracking-icon")

  return (
    <article className="teamCard">
      <div
        className={`teamPhoto${isPlaceholder ? " teamPhoto--placeholder" : ""}`}
      >
        <Image
          alt={member.title}
          filename={member.image}
          objectFit={isPlaceholder ? "contain" : "cover"}
          objectPosition="center center"
          variant={isPlaceholder ? "icon" : "avatar"}
        />
      </div>
      <div>
        <h3 className="teamName">{member.title}</h3>
        <p className="teamRole">{member.description}</p>
      </div>
    </article>
  )
}

export default TeamMember
