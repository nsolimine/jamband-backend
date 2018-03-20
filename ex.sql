select from session
  join purgatory on session.id = purgatory.session_id
  join players on purgatory.players_id = players.id;
