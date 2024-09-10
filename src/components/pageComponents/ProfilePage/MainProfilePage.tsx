import ProfileView from './ProfileView/ProfileView';
import UserHeadband from '../../standaloneComponents/UserHeadband/UserHeadband';


export default function MainProfilePage() {
    return (
        <>
        <UserHeadband setIsAuthenticated={function (): void {
                throw new Error('Function not implemented.');
            } } />
        <ProfileView />
        </>
    );
}
