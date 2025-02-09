import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {[
        {
          name: "Olivia Martin",
          action: "Registered as a new resident",
          time: "Just now",
          avatar: "/avatars/01.png",
          initials: "OM",
        },
        {
          name: "Jackson Lee",
          action: "Submitted a project proposal",
          time: "2 hours ago",
          avatar: "/avatars/02.png",
          initials: "JL",
        },
        {
          name: "Isabella Nguyen",
          action: "Created a new announcement",
          time: "4 hours ago",
          avatar: "/avatars/03.png",
          initials: "IN",
        },
        {
          name: "William Kim",
          action: "Updated household information",
          time: "Yesterday",
          avatar: "/avatars/04.png",
          initials: "WK",
        },
      ].map((item, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.avatar} alt="Avatar" />
            <AvatarFallback>{item.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.action}</p>
          </div>
          <div className="ml-auto font-medium text-sm">{item.time}</div>
        </div>
      ))}
    </div>
  );
}