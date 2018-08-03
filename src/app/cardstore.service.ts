import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardSchema } from './cardschema';
import { ListSchema } from './listschema';
import { ThrowStmt } from '../../node_modules/@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsUrl = 'api/cards'; // URL to web api
  private listUrl = 'api/lists';
  private list = new BehaviorSubject([
    {id: 1, name: 'First Column'},
    {id: 2, name: 'Second Column'},
    {id: 3, name: 'Third Column'}
  ]);
  currentList = this.list.asObservable();

  constructor(
    private http: HttpClient,
    ) { }

  /** GET all cards form the server */
  getCards(): Observable<CardSchema[]> {
    return this.http.get<CardSchema[]>(this.cardsUrl)
      .pipe(
        tap(cards => console.log('getAllLists() ', cards)),
        catchError(this.handleError('Something went wrong...', []))
      );
  }

  /** GET a card by it's id property */
  getCard(id: number): Observable<CardSchema> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<CardSchema>(url).pipe(
      tap(_ => console.log(`fetched card with id=${id}`)),
      catchError(this.handleError<CardSchema>(`getCard id=${id}`))
    );
  }

  /** POST: add a new card and save it to the server */
  addCard(card: CardSchema): Observable<CardSchema> {
    return this.http.post<CardSchema>(this.cardsUrl, card, httpOptions).pipe(
      tap((c: CardSchema) => {
        console.log('from addCard in service: ', c['data']);
      }),
      catchError(this.handleError<CardSchema>('handled addCard error'))
    );
  }

  /** PUT: Update a card on the server */
  updateCard(card: CardSchema): Observable<any> {
    return this.http.put<CardSchema>(this.cardsUrl, card, httpOptions).pipe(
      tap(_ => {
        console.log('Server updated a card: ', card.id);
      }),
      catchError(this.handleError('updateCard error in service'))
    );
  }

  /** DELETE: delete a card form the server from it's id */
  deleteCard(card: CardSchema | number): Observable<CardSchema> {
    const id = typeof card === 'number' ? card : card.id;
    const url = `${this.cardsUrl}/${id}`;
    return this.http.delete<CardSchema>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted card with id=${id}`)),
      catchError(this.handleError<any>('deleteCard'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
