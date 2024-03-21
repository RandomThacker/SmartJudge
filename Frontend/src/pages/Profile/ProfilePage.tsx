import ProfileStats from './Components/ProfileStats'
import UserProfile from './Components/UserProfile'
export default function ProfilePage() {
  return (
    <div>
      <UserProfile />
      <ProfileStats easy={32} medm={21} hard={21} />
    </div>
  )
}
