import { UserRole } from '../../types';
import { 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  User
} from 'lucide-react';

interface UserRoleIconProps {
  role: UserRole;
  className?: string;
}

export function UserRoleIcon({ role, className = "h-5 w-5" }: UserRoleIconProps) {
  switch (role) {
    case 'admin':
      return <ShieldCheck className={className} />;
    case 'trainer':
      return <GraduationCap className={className} />;
    case 'student':
      return <Users className={className} />;
    case 'parent':
      return <User className={className} />;
    default:
      return <User className={className} />;
  }
}