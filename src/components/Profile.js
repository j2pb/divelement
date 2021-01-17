import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'

import { historyService } from '../_services'
import Loader from './Loader'

const UserProfile = (props) => {
    const { profile } = props;
    return (
        <Card>
            <Card.Img variant="top" src={profile.avatar_url} />
            <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{profile.login}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{profile.location}</Card.Subtitle>
                <a href={profile.html_url} target="_blank" rel="noreferrer">
                    go to github profile
                </a>
            </Card.Body>
        </Card>
    )
}
const Profile = (props) => {

    const [profile, setprofile] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getUserProfile();
    }, []);

    const getUserProfile = async () => {
        var profile = await historyService.getUserProfile()
        setloading(false)
        setprofile(profile)
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-4 col-sm-12">
                {loading ? <Loader /> : <UserProfile profile={profile} />}
            </div>
        </div>

    )
}
export default Profile;