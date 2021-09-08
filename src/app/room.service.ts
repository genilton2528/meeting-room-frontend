import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
	providedIn: 'root'
})
export class RoomService {
	
	constructor() { }

	deleteRoom(id: number): Observable<Room> {
		throw new Error('Method not implemented.');
	}

	getRoomList(): Observable<Room[]> {
		throw new Error('Method not implemented.');
	}

	createRoom(room: Room): Observable<Room> {
		throw new Error('Method not implemented.');
	}

	getRoom(id: number): Observable<Room> {
		throw new Error('Method not implemented.');
	}

	updateRoom(id: number, room: Room): Observable<Room> {
		throw new Error('Method not implemented.');
	}
}
