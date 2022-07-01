var members = ['egoing', 'narak', 'muyaho'];
console.log(members[1]);
var i = 0;
while (i < members.length) {
    console.log('array loop:', members[i])
    i += 1
}

var roles = {
    'programmer': 'egoing',
    'designer': 'narak',
    'manager': 'muyaho'
}

console.log(roles.manager);

for (var name in members) {
    console.log('member: ', name)
}

for (var name in roles) {
    console.log('role of', roles[name], 'is', name)
}

console.log()