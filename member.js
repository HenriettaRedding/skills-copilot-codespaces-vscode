function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '=member'
        },
        templateUrl: 'templates/member.html'
    };
}